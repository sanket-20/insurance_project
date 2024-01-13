function main(req, res, client) {
    // res.send("inserted successfully");

    client.connect((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while connecting to the database");
            return;
        }

        const { id, name, mobile, pincode, email, role, password, address, landline } = req.body;

        const insertQuery = `
        INSERT INTO users (id, name, mobile, pincode, email, role, password, address, landline)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `;

        const values = [id, name, mobile, pincode, email, role, password, address, landline];

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

