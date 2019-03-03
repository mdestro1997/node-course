// const express = require('express');

// var app = express();




// app.get('/', (req,res) =>{

  
// //res.send('<h1>Hello Express</h1>');
// res.send({

//       name: 'Raphael',
//       likes:[
//           'Thinking',
//           'Philosophy'
//       ] 
// })

// });

// app.get('/about', (req,res) =>{

//    res.send('About Page');

// })


// app.listen(3000);




const express = require('express');
const fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;

//using MiddleWare by calling function 'app.use()'
app.use( (req,res,next) => {

    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    
    console.log(log);
    fs.appendFile('server.log', log + '\n',(err) =>{
       
     if(err) throw err;

     console.log('Data successfully appended!');

    });
    next();

} );

// app.use( (req,res,next)=>{

//     res.send('<h1>Fuck you Stux Le Wena Khino Website Under Maintainace!</h1>');
//     //res.send('')
//     next();
// })

app.get('/',(req,res) =>{


    res.send({

        likes:[

            'LOVE',
            'FORGIVENESS',
            'TRUST',
            'HOPE'
        ],
        name:'Raphael Mathuba',
        nickname:'DontGiveAFuck'
    })


});

app.get('/about',(req,res) =>{

  res.send('<h1>My First Express Application</h> \n <h3>Khino and Stux ba lepeleditse Mae!</h3>');
  //res.send('<h3>Khino and Stux ba lepeleditse Mae!</h3>')
})

app.listen(port, () =>{

      console.log(`Server started on port ${port}`);
});
