function main(req, res, client) {
    const customerId = req.params.customerId;

    client.connect((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error connecting to the database");
            return;
        }

        const query = 'SELECT * FROM customer WHERE id = $1';
        const values = [customerId];

        client.query(query, values, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error reading customer data");
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