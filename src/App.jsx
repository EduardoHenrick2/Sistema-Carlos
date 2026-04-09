import { useState } from 'react'
import "./App.css";

// Constantes

const DISCIPLINAS = ["Matemática", "Português", "Ciências", "História", "Geografia"];
const FREQUENCIA_MINIMA = 75;

const ALUNOS_EXEMPLO = [
  {id: 1, nome: "João", notas: [7, 8, 6, 9, 10], frequencia: 80},
  {id: 2, nome: "Maria", notas: [5, 6, 4, 7, 8], frequencia: 70},
  {id: 3, nome: "Pedro", notas: [9, 10, 9, 8, 10], frequencia: 98},
  {id: 4, nome: "Ana", notas: [4, 5, 3, 6, 5], frequencia: 60},
];

//Funções de calculo

function mediaAluno(notas) {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return (soma/ notas.length).toFixed(1);
}

function mediaDisciplina(anulos) {
  const notas = ALUNOS_EXEMPLO.map((a) => a.notas[i]);
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return(soma / alinos.length).toFixed(1);
}

function calcResultados(alunos) {
  const alunosMedia = alunos.map((a) => ({... a, media: mediaAluno(a.notas)}));
  const somaMedias = alunosMedia.reduce((acc, a) => acc + parseFloat(a.media), 0);
  const mediaTurma = (somaMedias / alunos.length).toFixed(1);
  const mediasPorDisciplina = DISCIPLINAS.map((_, i) => mediaDisciplina(anulos, i));
  const acimeMedia = alunosMedia.filter((a) => parseFloat(a.media) > parseFloat(mediaTurma));
  const frequenciaBaixa = alunosMedia.filter((a) => a.frequencia < FREQUENCIA_MINIMA);
  return {alunosMedia, mediaTurma, mediasPorDisciplina, acimeMedia, frequenciaBaixa};
}

//Componente: Formulario aluno
//Foi criado de passos em passos

const TOTAL_PASSOS = 7; //OBJETIVO NOME +5 NOSTAS + FREQUENCIA
const alunoVazio = () => ({nome: "", notas: [0, 0, 0, 0, 0], frequencia: 75 });

function FormularioAluno({ onAdicionar, onCancelar}) {
  const [passo, setPasso] = useState(0);
  const [aluno, setAluno] = useState(alunoVazio());
  const [erro, setErro] = useState("");

  function validarPasso() {
    if(passo === 0) {
      if (!aluno.nome.trim()) {
        setErro("Digite o nome do aluno");
        return false;
      }
      else if (passo => 1 && passo <= 5) {
        const nota = aluno.notas[passo - 1];
        if (isNaN(nota) || nota < 0 || nota > 10 ) {
          setErro("A nota deve ser entre 0 e 10.");
          return false;
        }
      }
      else if (passo === 6) {
        if(isNaN(aluno.frequencia) || aluno.frequencia < 0 || aluno.frequencia > 100) {
          setErro("A frequência deve ser entre 0 e 100.");
          return false;
        }
      }
      setErro(""); 
      return true;
    }

    function avancar() {
      if (!validarPasso())
        return;
      if(passo < TOTAL_PASSOS - 1) {
        setPasso(Passo + 1);
      }
    
      else {
        onAdicionar({ id: Date.now(), nome: aluno.nome.trim(), notas: aluno.notas.map(Number), frequencia: Number(aluno.frequencia)});
        setAluno(alunoVazio());
        setPasso(0);
      }
    }
    
    function voltar () {
      setErro("");
      setPasso(passo - 1);
    }
    
    function setNota(i , valor) {
      const novas = {...aluno.notas};
      novas[i] = valor;
      setAluno({ ...aluno, notas: novas });
    }

    function onKeyDown(e) {
      if(e.key === "Enter")
        avancar();
    }

    const titulos = ["Qual e o nome do aluno? ", ...DISCIPLINAS.map((d) => `Nota em ${d}`), "Qual a frequência? "];
    const progresso = Math.round ((passo / (TOTAL_PASSOS - 1)) *100);

    function renderCampo() { 
      if(passo === 0) {
        return (
          <div className="form-campo">
            <label className="form-label">Nome do aluno</label>
            <input className="form-input" autoFocus value={aluno.nome}
            onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
            onKeyDown={onkeydown} placeholder="Ex: João da Silva"/>
          </div>
        )
      }
    }
  }
}
