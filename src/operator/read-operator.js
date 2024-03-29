function main(req, res, client) {
    const operatorId = req.params.operatorId;

    client.connect((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error connecting to the database");
            return;
        }

        const query = 'SELECT * FROM operator WHERE id = $1';
        const values = [operatorId];

        client.query(query, values, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error reading operator data");
            } else {
                const user = data.rows[0];
                res.json(user);
            }

            // Close the connection
            client.end();

        });
    });
}

module.exports = {
    main: main
}