import styled from "styled-components";
import setaplay from "./assets/seta_play.png";
import setavirar from "./assets/seta_virar.png";
import acerto from "./assets/icone_certo.png";
import erro from "./assets/icone_erro.png";
import quase from "./assets/icone_quase.png";

export default function Flashcard(props) {
  const { transformarCarta, setTransformarCarta } = props;
  const { respostaCarta, setRespostaCarta } = props;
  const {
    corVerde,
    setCorVerde,
    corVermelho,
    setCorVermelho,
    corAmarelo,
    setCorAmarelo,
    cor,
  } = props;
  const { tracado, setTracado } = props;
  const { numeroPergunta } = props;
  let corr;

  function transformarcarta(index) {
    if (cor != verde && cor != amarelo && cor != vermelho) {
      const novoArray = [...transformarCarta, index];
      setTransformarCarta(novoArray);
    }
  }
  function respostacarta(index) {
    if (cor != verde && cor != amarelo && cor != vermelho) {
      const novoArray = [...respostaCarta, index];
      setRespostaCarta(novoArray);
    }
  }
  function nada() {}

  return (
    <>
      {!transformarCarta.includes(numeroPergunta) ? (
        <PerguntaFechada
          data-identifier="flashcard"
          cor={
            corVerde.includes(numeroPergunta)
              ? verde
              : corAmarelo.includes(numeroPergunta)
              ? amarelo
              : corVermelho.includes(numeroPergunta)
              ? vermelho
              : ""
          }
          tracado={
            corVerde.includes(numeroPergunta) ||
            corAmarelo.includes(numeroPergunta) ||
            corVermelho.includes(numeroPergunta)
              ? tracado
              : ""
          }
          onClick={
            corVerde.includes(numeroPergunta) ||
            corAmarelo.includes(numeroPergunta) ||
            corVermelho.includes(numeroPergunta)
              ? nada
              : () => transformarcarta(numeroPergunta)
          }
        >
          <p>Pergunta {props.numeroPergunta + 1} </p>
          <img
            data-identifier="flashcard-status"
            src={
              corVerde.includes(numeroPergunta)
                ? acerto
                : corAmarelo.includes(numeroPergunta)
                ? quase
                : corVermelho.includes(numeroPergunta)
                ? erro
                : setaplay
            }
          />
        </PerguntaFechada>
      ) : !respostaCarta.includes(numeroPergunta) ? (
        <PerguntaAberta>
          <p>{props.pergunta} </p>
          <img src={setavirar} onClick={() => respostacarta(numeroPergunta)} />
        </PerguntaAberta>
      ) : (
        <PerguntaAberta>
          <p>{props.resposta} </p>
        </PerguntaAberta>
      )}
    </>
  );
}

const verde = "#2FBE34";
const amarelo = "#FF922E";
const vermelho = "#FF3030";

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.cor};
  text-decoration: ${(props) => props.tracado};
  & :hover {
    cursor: pointer;
  }
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  & img:hover {
    cursor: pointer;
  }
`;
