function main(req, res, client) {
    const userId = req.params.userId;

    client.connect((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error connecting to the database");
            return;
        }

        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [userId];

        client.query(query, values, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error reading user data");
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