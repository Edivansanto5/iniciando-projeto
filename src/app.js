const express = require('express')

const app = express()

// fazendo as rotas
app.use('/',(req, res)=>{
    res.send('App online e funcionado ok marujo !')

})

app.listen(3000,()=>{
    console.log('App online')
})