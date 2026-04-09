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

