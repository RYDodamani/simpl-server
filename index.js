const express = require('express');


const app = express();

app.get('/',(req,res)=>{
	res.end('Hello from simple express server');
});


app.listen(3000,()=>console.log('Listening on',3000));
