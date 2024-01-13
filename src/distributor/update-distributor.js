function updateDistributor(req, res, client) {
    const { id, newName} = req.body;
  
    const updateQuery = `
      UPDATE distributer
      SET name = $1
      WHERE id = $2
    `;
  
    const values = [newName, id];
  
    client.query(updateQuery, values, (queryError) => {
      if (queryError) {
        console.log(queryError);
        res.status(500).send("Error while updating Distributor");
        return;
      }
  
      console.log("Distributor updated successfully");
      res.status(200).send("Distributor updated successfully");
    });
  }
  
  function main(req, res, client) {
    // console.log("update");
    // let x = req.body;
    // console.log(x);
  
    client.connect((connectError) => {
      if (connectError) {
        console.log(connectError);
        res.status(500).send("Error while connecting to the database");
        return;
      }
  
      updateDistributor(req, res, client);
    });
  }
  
  module.exports = {
    main: main
  };
  