

function deleteUser(req, res, client) {
    const { id } = req.body;
  
    const deleteQuery = `
      DELETE FROM users
      WHERE id = $1
    `;
  
    const values = [id];
  
    client.query(deleteQuery, values, (queryError) => {
      if (queryError) {
        console.log(queryError);
        res.status(500).send("Error while deleting student");
        return;
      }
  
      console.log("User deleted successfully");
      res.status(200).send("User deleted successfully");
    });
  }
  
  function main(req, res, client) {
    // console.log("delete");
    // let x = req.body;
    // console.log(x);
  
    client.connect((connectError) => {
      if (connectError) {
        console.log(connectError);
        res.status(500).send("Error while connecting to the database");
        return;
      }
  
      deleteUser(req, res, client);
    });
  }

  

module.exports={
    main: main
}