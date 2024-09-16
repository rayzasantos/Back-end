const express = require("express") // Aqui estou iniciando o express
const router = express.Router() // Aqui estou configurando a primeira porte da rota
const conectaBancodedados = require('./Banco_de_dados') // Ligando ao banco de dados
conectaBancodedados() // chamando a função que conecta ao banco de dados
const Personagem = require('./PersonagensModel') // Ligando ao Model
const cors = require('cors') // pacote core que permitir consumir no frond-end

const app = express() // Iniciando o app
app.use(express.json()) // enviar de forma json
app.use(cors())
const rayza = 333 // criando a porta 

// GET
async function mostraPersonagens(request, response) {
  try{
   const personagens_do_banco_de_dados = await Personagem.find()
   response.json(personagens_do_banco_de_dados)
  } catch(erro){
    console.log(erro)
  }

}

// Post

async function criaPersonagens(request,response){
const novoPersonagem = new Personagem({
  nome: request.body.nome,
  imagem: request.body.imagem,
  minibio: request.body.minibio
})
 try{
  const personagem_criado = await novoPersonagem.save()
  response.status(201).json(personagem_criado)
 } catch(erro){
  console.log(erro)

 }
}

// Patch
async function corrigePersonagens(request,response){
  
  try{
    const  personagensencontrado = await Personagem.findById(reques.params.id)
    if (request.body.name){
      personagensencontrado.nome = request.body.name
    }
    
     if (request.body.minibio){
      personagensencontrado.minibio = request.minibio
      }
        if (request.body.imagem){
          personagensencontrado.imagem = request.imagem
        }
  
      const personagem_atualizado = await personagensencontrado.save()
      response.json(personagem_atualizado)
  }
  catch(erro){
    console.log(erro)
  }
      }

// deletar 
 async function deletaPersonagem(request,response){
  try{
   await Personagem.findByIdAndDelete(request.params.id)
   response.json({messagem:'Personagem deletado com sucesso!'})
  }
  catch(erro){
    console.log(erro)
  }
 }
// Função porta
function mostraRayza() {

    console.log("Servidor criado e rodando ", rayza)

}
app.use(router.get('/anya', mostraPersonagens)) // configuração rota do GET
app.use(router.post('/anya', criaPersonagens)) // Configuração rota post 
app.use(router.patch( '/anya/:id',corrigePersonagens)) // Configaração da rota patch/ 
app.use(router.delete('/anya/:id',deletaPersonagem)) // deletar personagens 
app.listen(rayza, mostraRayza) // servidor ouvindo a porta


