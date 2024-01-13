function main(req, res, client) {
    // res.send("inserted successfully");

    client.connect((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while connecting to the database");
            return;
        }

        const { id, name, ko_id, client_id, distributor_id, user_id} = req.body;

        const insertQuery = `
        INSERT INTO operator (id, name, ko_id, client_id, distributor_id, user_id)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;

        const values = [id, name, ko_id, client_id, distributor_id, user_id];

        client.query(insertQuery, values, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error while inserting data");
                return;
            }
            console.log("Data inserted successfully");
            res.status(200).send("Data inserted successfully");
        
        });
    });
}

module.exports = {
    main: main
}

