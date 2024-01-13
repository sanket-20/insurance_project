function main(req, res, client)
{
    client.connect((err)=>{
        if(err){
            console.log(err);
        }
        else{
            client.query("select * from distributer", (err,data)=>{
                console.log(data.rows);
            })
        }
    })
    res.send("Read distributor List Successfully");
}

module.exports={
    main:main
}