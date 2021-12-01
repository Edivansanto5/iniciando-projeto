const express = require('express')

const app = express()

// fazendo as rotas
app.get('/',(req, res)=>{
    res.send('App online e funcionado ok marujo !')

})

app.get('/alunos',(req, res)=>{
    res.send('Retorna todos os alunos !')

})
app.post('/alunos',(req, res)=>{
    res.send('Adicionar Aluno  !')

})
app.put('/alunos',(req, res)=>{
    res.send('Alterar um  Aluno especifico !')

})
app.delete('/alunos',(req, res)=>{
    res.send('Deletar um  Aluno especifico !')

})

app.listen(3000,()=>{
    console.log('App online')
})