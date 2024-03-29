function main(req, res, client) {
    // res.send("inserted successfully");

    client.connect((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while connecting to the database");
            return;
        }

        const { id, name, mobile,mobile_2, pincode, email, secondary_email, landmark, password, address, remarks, landline, user_id, added_by, photo } = req.body;

        const insertQuery = `
        INSERT INTO client (id, name, mobile,mobile_2, pincode, email, secondary_email, landmark, password, address, remarks, landline, user_id, added_by, photo)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      `;

        const values = [id, name, mobile,mobile_2, pincode, email, secondary_email, landmark, password, address, remarks, landline, user_id, added_by, photo];

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

