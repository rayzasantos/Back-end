const express = require("express")
const router = express.Router()
const app = express()
const rayza = 333


const anya = [{
    nome: 'Anya Forger',
    imagem: 'https://avatars.githubusercontent.com/u/120316986?v=4',
    minibio: 'nya Forger é uma das personagens principais do mangá e anime Spy x Family, criado por Tatsuya Endo. Anya é uma menina adorável com habilidades telepáticas, capaz de ler os pensamentos das pessoas ao seu redor'
},

{ nome: 'Loid Forger (Twilight)',
  imagem:'https://cdn.donmai.us/original/eb/c8/ebc84e5b852911bb48478681cb3ba414.jpg',
  minibio: 'O protagonista masculino, é um espião altamente qualificado que trabalha para a organização secreta "WISE". Ele adota Anya e finge ser seu pai para completar uma missão importante. Seu codinome é Twilight, e ele é conhecido por sua frieza e habilidades de espionagem, mas aos poucos desenvolve sentimentos genuínos por sua família falsa.'


},
{ nome: 'Yor Forger (Thorn Princess)',
    imagem:'https://images.surferseo.art/e5b00e6f-751c-4787-948c-52078359324d.jpeg',
    minibio: 'A esposa de Loid e mãe adotiva de Anya. Embora pareça uma funcionária pública comum, ela é secretamente uma assassina profissional conhecida como Thorn Princess. Ela é uma pessoa gentil e inocente fora do trabalho, mas mortal em suas missões. Sua relação com Loid e Anya cria muitas situações emocionantes e cômicas.'
  
  
  },

  { nome: 'Bond Forger',
    imagem:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Spy-x-family-episode-15-Anya-and-Bond.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5',
    minibio: 'O cachorro da família Forger, Bond tem habilidades especiais que incluem a capacidade de prever o futuro. Ele foi um experimento da mesma organização que manipulou Anya, o que o conecta à sua nova família de forma única.'
  
  
  },
  { nome: 'Franky Franklin',
    imagem:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/Franky-with-wine.webp?q=50&fit=crop&w=1100&h=618&dpr=1.5git',
    minibio: 'Amigo e aliado de Loid, Franky é um especialista em informações que ajuda Twilight em suas missões secretas. Ele trabalha disfarçado em uma loja de tabaco, mas está sempre disponível para ajudar nas tarefas de espionagem, muitas vezes de maneira cômica.'
  
  
  }
]


function mostraAnya(request, response) {

 response.json(anya)

}
function mostraRayza() {

    console.log("Servidor criado e rodando ", rayza)

}
app.use(router.get('/anya', mostraAnya))
app.listen(rayza, mostraRayza)

