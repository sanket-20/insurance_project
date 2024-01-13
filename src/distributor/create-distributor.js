function main(req, res, client) {
    // res.send("inserted successfully");

    client.connect((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while connecting to the database");
            return;
        }

        const { id, name, user_id, client_id, description} = req.body;

        const insertQuery = `
        INSERT INTO distributer (id, name, user_id, client_id, description)
        VALUES ($1, $2, $3, $4, $5)
      `;

        const values = [id, name, user_id, client_id, description];

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

