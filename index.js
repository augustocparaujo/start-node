const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const app = express()


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const user = {
	name:'Augusto',
	surname:'Araújo',
	contato:'(91) 991968433',
	site:'https://augustocezar.com.br',
	api:'https://augustocezar.com.br/projetonode:3000',
}

const ling = ['PHP','NodeJs',
	'JavaScript',
	'Mysql',
	'SqlServer',
	'HTML/CSS/Bootstrap',
	'AWS: ECS/RDS/Balance',
	'Inlgês Básico técnico',
]


app.get('/contato',(req,res) => {
	res.render('contato',{user, ling})
})

app.get('/product/:id',(req,res) => {
	const products = product[parseInt(req.params.id) - 1]
	res.render('product',{products})
})

app.get('/produtos', (req,res) => {

const sql = 'SELECT id,descricao,tamanho,nomemarca,unidade,precovenda FROM produto'

conn.query(sql, function(err, data){
	if(err){
		console.log(err)
		return
	}
	
	const produtos = data
	res.json(produtos)
	})
})

app.get('/produtos/:id',(req,res) => {
	const id = req.params.id
	sql = `SELECT * FROM produto WHERE ??=?`

	conn.query(sql, ['id',id], function(err, data){
		if(err){
		console.log(err)
		return
	}	
	const produtos = data
	res.json(produtos)
	})
})

const conn = mysql.createConnection({
	host:'localhost',
	user:'produto',
	password:'SkhEdixcaSe4sKyh',
	database:'produto',
})

app.get('/',(req,res) => {
	res.render('home', {user:user})
})

app.listen(4000, () => {
	console.log(`Servidor rodando`)
})
