import { useState } from "react";
import styled from "styled-components";
import logo from "./assets/logo.png"
import Flashcards from "./Flashcards";

export default function App() {
    const [transformarCarta, setTransformarCarta] = useState([])
    const [respostaCarta, setRespostaCarta] = useState([])
    const [corVerde, setCorVerde] = useState([])
    const [corAmarelo, setCorAmarelo] = useState([])
    const [corVermelho, setCorVermelho] = useState([])
    const [tracado, setTracado] = useState('')
    const numeroPergunta = [0,1,2,3,4,5,6,7]
    let cor;
    

    function zap(index) {
        if(respostaCarta.length > 0){
            const novoArray = [...corVerde, index]
            setCorVerde(novoArray)
            setTracado('line-through')
            setTransformarCarta([])
            setRespostaCarta([])
        }
    }

    function quase(index) {
        if(respostaCarta.length > 0){
            const novoArray = [...corAmarelo, index]
            setCorAmarelo(novoArray)
            setTracado('line-through')
            setTransformarCarta([])
            setRespostaCarta([])
        }
    }

    function naolembrei(index) {
        if(respostaCarta.length > 0){
            const novoArray = [...corVermelho, index]
            setCorVermelho(novoArray)
            setTracado('line-through')
            setTransformarCarta([])
            setRespostaCarta([])
        }
    }

    return (
        <Conteudo>
            <ContainerLogo>
                <Logo src={logo}>
                </Logo>
                <Titulo>
                    ZapRecall
                </Titulo>
            </ContainerLogo>
            <Flashcards 
            numeroPergunta = {numeroPergunta}
            transformarCarta={transformarCarta} 
            setTransformarCarta={setTransformarCarta}
            respostaCarta = {respostaCarta} 
            setRespostaCarta ={setRespostaCarta}
            corVerde = {corVerde}
            setCorVerde = {setCorVerde}
            corAmarelo = {corAmarelo}
            setCorAmarelo = {setCorAmarelo}
            corVermelho = {corVermelho}
            setCorVermelho = {setCorVermelho}
            tracado ={tracado}
            setTracado={setTracado}
            cor = {cor}
            />
            <Footer>
                <ContainerBotoes>
                    <Botoes cor={vermelho} onClick={() => naolembrei(respostaCarta[0])}> Não lembrei</Botoes>
                    <Botoes cor={amarelo} onClick={() => quase(respostaCarta[0])}> Quase não lembrei</Botoes>
                    <Botoes  cor = {verde}  onClick={() => zap(respostaCarta[0])} > Zap!</Botoes>
                </ContainerBotoes>
            </Footer>
        </Conteudo>
    );
}

const verde = '#2FBE34'
const amarelo = "#FF922E"
const vermelho = "#FF3030"

const Conteudo = styled.div`
    background-color: #FB6B6B;
    width: 100%/*vw*/;
   /* min-height: 100vh;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
`
const Logo = styled.img`
    width: 52px;
`
const Titulo = styled.div`
    /*font-family: 'Righteous';*/
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
`

const Footer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`
const Botoes = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.cor};
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
`
/*.screen-container{
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
   
  }
  
  .logo-container img {
    width: 52px;
  }
  
  .logo-container h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
  
  .footer-concluidos {
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
  }
  
  .footer-concluidos > .container-botoes {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
  
  /* Você vai precisar trocar a cor dos botões e alguns textos!
    VERDE = "#2FBE34"
    AMARELO = "#FF922E"
    VERMELHO = "#FF3030"
    CINZA = "#333333" 
  *//*
 
.container-botoes > button {
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: blue;
border-radius: 5px;
border: 1px solid blue;
padding:5px;
}
 
.pergunta-fechada {
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
}
 
.pergunta-fechada > p {
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
}
 
.pergunta-aberta {
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
}
 
.pergunta-aberta > img{
position: absolute;
bottom: 10px;
right: 10px;
}*/
