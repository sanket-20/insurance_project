function main(req, res, client) {
    // res.send("inserted successfully");

    client.connect((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while connecting to the database");
            return;
        }

        const { id, name, mobile, mobile_2, landline, address} = req.body;

        const insertQuery = `
        INSERT INTO customer (id, name, mobile, mobile_2, landline, address)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;

        const values = [id, name, mobile, mobile_2, landline, address];

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

