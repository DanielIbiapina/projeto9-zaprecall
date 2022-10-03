import { useState } from "react";
import Flashcard from "./Flashcard";
import styled from "styled-components";


export default function Flashcards(props) {
    const { transformarCarta, setTransformarCarta } = props
    const { respostaCarta, setRespostaCarta } = props
    const { corVerde, setCorVerde, corVermelho, setCorVermelho, corAmarelo, setCorAmarelo, cor } = props
    const { tracado, setTracado } = props
    const { numeroPergunta } = props

    return (
        <>

            <Flashcard
                pergunta= {'Qual a melhor série do mundo?'}
                resposta= {'Game of Thrones'}
                numeroPergunta={numeroPergunta[0]}
                transformarCarta={transformarCarta}
                setTransformarCarta={setTransformarCarta}
                respostaCarta={respostaCarta}
                setRespostaCarta={setRespostaCarta}
                corVerde={corVerde}
                setCorVerde={setCorVerde}
                corAmarelo={corAmarelo}
                setCorAmarelo={setCorAmarelo}
                corVermelho={corVermelho}
                setCorVermelho={setCorVermelho}
                tracado={tracado}
                setTracado={setTracado}
                cor = {cor}
            />
            <Flashcard
                pergunta= {'Qual o 9 do hexa?'}
                resposta= {'Pedro'}
                numeroPergunta={numeroPergunta[1]}
                transformarCarta={transformarCarta}
                setTransformarCarta={setTransformarCarta}
                respostaCarta={respostaCarta}
                setRespostaCarta={setRespostaCarta}
                corVerde={corVerde}
                setCorVerde={setCorVerde}
                corAmarelo={corAmarelo}
                setCorAmarelo={setCorAmarelo}
                corVermelho={corVermelho}
                setCorVermelho={setCorVermelho}
                tracado={tracado}
                setTracado={setTracado}
                cor = {cor}
            />
            <Flashcard
                pergunta= {'Qual a protagonista de House of the dragon?'}
                resposta= {'Rhaenyra'}
                numeroPergunta={numeroPergunta[2]}
                transformarCarta={transformarCarta}
                setTransformarCarta={setTransformarCarta}
                respostaCarta={respostaCarta}
                setRespostaCarta={setRespostaCarta}
                corVerde={corVerde}
                setCorVerde={setCorVerde}
                corAmarelo={corAmarelo}
                setCorAmarelo={setCorAmarelo}
                corVermelho={corVermelho}
                setCorVermelho={setCorVermelho}
                tracado={tracado}
                setTracado={setTracado}
                cor = {cor}
            />
            <Flashcard
                pergunta= {'Qual a melhor série da Netflix?'}
                resposta= {'Dark'}
                numeroPergunta={numeroPergunta[3]}
                transformarCarta={transformarCarta}
                setTransformarCarta={setTransformarCarta}
                respostaCarta={respostaCarta}
                setRespostaCarta={setRespostaCarta}
                corVerde={corVerde}
                setCorVerde={setCorVerde}
                corAmarelo={corAmarelo}
                setCorAmarelo={setCorAmarelo}
                corVermelho={corVermelho}
                setCorVermelho={setCorVermelho}
                tracado={tracado}
                setTracado={setTracado}
                cor = {cor}
            />

        </>
    );
}


