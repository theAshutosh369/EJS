
// const exp = require('express')
// const bp = require('body-parser')

// const app = exp()

// app.get("/", function(req , res )
// {
//     res.send("Hello")
// })

// app.listen(3000 , function(req ,res ){
//     console.log("Server is runing at port 3000 ")
// })

// upr ka template hr ek project ke liye same hi rahega 






const exp = require('express')
const bp = require('body-parser')
const { Template } = require('ejs')

const app = exp()
app.set('view engine' , 'ejs')
// it generally tells the server to use the ejs
// for that we have to create a folder named 'views' as it is in the same directory where the app.js is 



// below code app.get() is for other demonstrations in ejs 
// app.get("/", function(req , res )
// {
//     var today = new Date()
//     //js madhe date ek class or library hi mhanu shakto
//     var day = today.getDay()
//     // todat.getDay ek function ahe je ajch var sangt in number format . monday sathi 1 ani sunday sathi 7 

//     var passday
//     if( day==1 )
//     {
//         // res.write("<h1>yay its the weekend broo !!!!</h1>")
//         // res.write("<h1>Yes its a weekend </h1>")
//         // res.send()
//         // jr multiple html lines pathvayche astil tr res.write wapra and last la fkt res.send() call karaych 

//         passday = "Monday"
//     }
//     else if( day==2 ){  
//         // res.write("<h1>no its not the weekend</h1>")
//         // res.write("<h1>lorem5</h1>")
//         // res.send()
//         // jr khupch html code asel tr ek file create krun tyat sagl html lihun res.sendFile(__dirname+"/filename.html")  karaych purn file cha html send hoil 

//         passday = "tuesday"
//     }
//     else if( day==3 ){  
//         passday = "wednesday"
//     }
//     else if( day==4 ){  
//         passday = "thursday"
//     }
//     else if( day==5 ){  
//         passday = "friday"
//     }
//     else if( day==6 ){
//         passday = "saturday"
//     }
//     else {  
//         passday = "sunday"
//     }


//     res.render("list",{
//          kindOfday : passday
//      } )
//     // jevha hi line lihto tevha express 'views' folder madhe jail ani list.ejs shodel
//     // kindOfday word marker apn define kelay list.ejs madhe so tyajagi passday chi value thevel its just like passing parameter 
//     // mostly people key value name same ch thevtat means kindOfday ani passday la passday lihtat jast confusion nko mhanun

// })


app.get("/" , function(req, res){
    var today = new Date()

    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    var day = today.toLocaleString("en-US" , options)

    res.render( "list" , {
        kindOfDay : day
    })

});

app.listen( 3333 , function(req ,res ){
    console.log("Server is runing at port 3333 ")
})


// EJS - Embedded Java Script
// ejs is just a Template and helps us to not repeat the code.