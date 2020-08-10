//Dados


// require('express')()
// .get("/", (req, res) =>{/*arrow function = function(){}*/ 
//     return res.send("Hi from NLW")
// })
// .get("/study" , (req,res)=>{
//     return res.send("study")
// })
// .listen(5500);




//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nujucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//Inicio e configuração servidor
server
//receber is dados do req.body
.use(express.urlencoded({extended: true}))
//Configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes" , pageGiveClasses)
.post("/save-classes", saveClasses)
//Start servidor
.listen(5500);

