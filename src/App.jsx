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

