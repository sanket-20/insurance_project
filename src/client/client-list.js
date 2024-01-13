function main(req, res, client)
{
    client.connect((err)=>{
        if(err){
            console.log(err);
        }
        else{
            client.query("select * from client", (err,data)=>{
                console.log(data.rows);
            })
        }
    })
    res.send("Read Client List Successfully");
}

module.exports={
    main:main
}