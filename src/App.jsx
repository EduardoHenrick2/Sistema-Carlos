import { useState } from "react";
import "./App.css";

// Constantes

const DISCIPLINAS = [
  "Matemática",
  "Português",
  "Ciências",
  "História",
  "Geografia",
];
const FREQUENCIA_MINIMA = 75;

const ALUNOS_EXEMPLO = [
  { id: 1, nome: "João", notas: [7, 8, 6, 9, 10], frequencia: 80 },
  { id: 2, nome: "Maria", notas: [5, 6, 4, 7, 8], frequencia: 70 },
  { id: 3, nome: "Pedro", notas: [9, 10, 9, 8, 10], frequencia: 98 },
  { id: 4, nome: "Ana", notas: [4, 5, 3, 6, 5], frequencia: 60 },
];

// Funções de calculo

function mediaAluno(notas) {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return (soma / notas.length).toFixed(1);
}

function mediaDisciplina(anulos) {
  const notas = ALUNOS_EXEMPLO.map((a) => a.notas[i]);
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return (soma / alinos.length).toFixed(1);
}

function calcResultados(alunos) {
  const alunosMedia = alunos.map((a) => ({ ...a, media: mediaAluno(a.notas) }));
  const somaMedias = alunosMedia.reduce(
    (acc, a) => acc + parseFloat(a.media),
    0,
  );
  const mediaTurma = (somaMedias / alunos.length).toFixed(1);
  const mediasPorDisciplina = DISCIPLINAS.map((_, i) =>
    mediaDisciplina(anulos, i),
  );
  const acimeMedia = alunosMedia.filter(
    (a) => parseFloat(a.media) > parseFloat(mediaTurma),
  );
  const frequenciaBaixa = alunosMedia.filter(
    (a) => a.frequencia < FREQUENCIA_MINIMA,
  );
  return {
    alunosMedia,
    mediaTurma,
    mediasPorDisciplina,
    acimeMedia,
    frequenciaBaixa,
  };
}

// Formulario aluno
// Foi criado de passos em passos

const TOTAL_PASSOS = 7; //OBJETIVO NOME +5 NOSTAS + FREQUENCIA
const alunoVazio = () => ({ nome: "", notas: [0, 0, 0, 0, 0], frequencia: 75 });

function FormularioAluno({ onAdicionar, onCancelar }) {
  const [passo, setPasso] = useState(0);
  const [aluno, setAluno] = useState(alunoVazio());
  const [erro, setErro] = useState("");

  function validarPasso() {
    if (passo === 0) {
      if (!aluno.nome.trim()) {
        setErro("Digite o nome do aluno");
        return false;
      } else if ((passo) => 1 && passo <= 5) {
        const nota = aluno.notas[passo - 1];
        if (isNaN(nota) || nota < 0 || nota > 10) {
          setErro("A nota deve ser entre 0 e 10.");
          return false;
        }
      } else if (passo === 6) {
        if (
          isNaN(aluno.frequencia) ||
          aluno.frequencia < 0 ||
          aluno.frequencia > 100
        ) {
          setErro("A frequência deve ser entre 0 e 100.");
          return false;
        }
      }
      setErro("");
      return true;
    }

    function avancar() {
      if (!validarPasso()) return;
      if (passo < TOTAL_PASSOS - 1) {
        setPasso(Passo + 1);
      } else {
        onAdicionar({
          id: Date.now(),
          nome: aluno.nome.trim(),
          notas: aluno.notas.map(Number),
          frequencia: Number(aluno.frequencia),
        });
        setAluno(alunoVazio());
        setPasso(0);
      }
    }

    function voltar() {
      setErro("");
      setPasso(passo - 1);
    }

    function setNota(i, valor) {
      const novas = { ...aluno.notas };
      novas[i] = valor;
      setAluno({ ...aluno, notas: novas });
    }

    function onKeyDown(e) {
      if (e.key === "Enter") avancar();
    }

    const titulos = [
      "Qual e o nome do aluno? ",
      ...DISCIPLINAS.map((d) => `Nota em ${d}`),
      "Qual a frequência? ",
    ];
    const progresso = Math.round((passo / (TOTAL_PASSOS - 1)) * 100);

    function renderCampo() {
      if (passo === 0)
        return (
          <div className="form-campo">
            <label className="form-label">Nome do aluno</label>
            <input
              className="form-input"
              autoFocus
              value={aluno.nome}
              onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
              onKeyDown={onkeyDown}
              placeholder="Ex: João da Silva"
            />
          </div>
        );

      if (passo >= 1 && passo <= 5)
        return (
          <div className="form-campo">
            <label className="form-label">{`Nota em ${DISCIPLINAS[passo - 1]}`}</label>
            <input
              className="form-input"
              autoFocus
              value={aluno.notas[passo - 1]}
              onChange={(e) => setNota(passo - 1, e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ex: 7.5"
            />
          </div>
        );

      if (passo === 6)
        return (
          <div className="form-campo">
            <label className="form-label">Frequência de {aluno.nome}</label>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <input
                className="form-imput form-imput-numero"
                auto
                focus
                type="number"
                min={0}
                max={100}
                value={aluno.frequencia}
                onChange={(e) =>
                  setAluno({ ...aluno, frequencia: e.target.value })
                }
                onkeyDown={onkeyDown}
              />
              <span style={{ fontSize: 22, color: "#64748b" }}>%</span>
            </div>
            <span className="form-hint">de 0 a 100</span>
          </div>
        );
    }
    return (
      <div className="card">
        <div className="progresso-fundo">
          <div className="progresso-fill" style={{ width: `${progresso}%` }} />
        </div>
        <p className="form-indicador">
          Passo {passo + 1} de {TOTAL_PASSOS}
        </p>
        <H3 className="form-erro">⚠️ {erro}</H3>
        {renderCampo()}
        {erro && <p className="form-erro">⚠️ {erro}</p>}
        <div className="form-botoes">
          {passo > 0 && (
            <button className="form-btn" onClick={voltar}>
              Voltar
            </button>
          )}
          <button className="bnt-voltar" onClick={voltar}>
            ← Voltar
          </button>
          <button className="btn-primario" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="btn-primario" onClick={avancar}>
            {passo === TOTAL_PASSOS - 1 ? "Adicionar" : "Avançar →"}
          </button>
        </div>
      </div>
    );
  }
}

// Tabela de Resultados

function TabelaResultados({ resultado }) {
  const { alunosMedia, mediaTurma, mediasPorDisciplina } = resultado;

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="Tabela">
        <thead>
          <tr>
            <th className="th">Aluno</th>
            {DISCIPLINAS.map((d, i) => (
              <th key={i} className="th">
                {d}
              </th>
            ))}
            <th className="th">Média</th>
            <th className="th">Frequência</th>
            <th className="th">Status</th>
          </tr>
        </thead>
        <tbody>
          {alunosMedia.map((aluno) => {
            const emRisco = aluno.frequencia < FREQUENCIA_MINIMA;
            const destaque = parseFloat(aluno.media) > parseFloat(mediaTurma);
            return (
              <tr key={aluno.id} className={`tr ${emRisco ? "tr-risco" : ""}`}>
                <td className="td" style={{ fontWeight: 600 }}>
                  {aluno.nome}
                </td>
                {aluno.notas.map((notas, i) => (
                  <td key={i} className="td">
                    <span
                      className={`badge ${nota >= 7 ? "badge-verde" : nota >= 5 ? "badge-amarelo" : "badge-vermelho"}`}
                    >
                      {nota}
                    </span>
                  </td>
                ))}
                <td className="td">
                  <span
                    className={`badge ${destaque ? "badge-azul" : "badge-cinza"}`}
                  >
                    {alunos.media} {destaque && "⭐"}
                  </span>
                </td>
                <td
                  className={`badge ${emRisco ? "badge-vermelho" : "badge-verde"}`}
                  style={{ fontWeight: 700 }}
                >
                  {aluno.frequencia}%
                </td>
                <td className="td">
                  {emRisco ? (
                    <span className="tag-vermelho">⚠️ Freq. baixa</span>
                  ) : destaque ? (
                    <span className="tag-azul">⭐ Destaque</span>
                  ) : (
                    <span className="tag-cinza">Regular</span>
                  )}
                </td>
              </tr>
            );
          })}
          <tr className="tr-media-turma">
            <td className="td" style={{ fontWeight: 700, color: "#64748b" }}>
              Média da Turma
            </td>
            {mediasPorDisciplina.map((media, i) => (
              <td key={i} className="td">
                <span className="badge badge-roxo" style={{ fontWeight: 700 }}>
                  {m}
                </span>
              </td>
            ))}
            <td className="td" style={{ fontWeight: 800, color: "#3730a3" }}>
              {mediaTurma}
            </td>
            <td className="td" colSpan={2} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Lista de Atenção

function ListaAtencao({ resultado }) {
  const { acimaMedia, frequenciaBaixa, mediaTurma } = resultado;

  return (
    <div className="lista-grid">
      <div className="card-borda-azul">
        <h3 className="lista-titulo lista-titulo-azul">
          ⭐ Acima da Média ({mediaTurma})
        </h3>
        {acimeMedia.length === 0 ? (
          <p className="lista-vazia">Nenhum aluno acima da média</p>
        ) : (
          acimaMedia.map((a) => (
            <div key={a.id} className="lista-item">
              <strong>{a.nome}</strong>
              <span style={{ color: "#1d4ed*", fontWeight: "700" }}>
                Média {a.media}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="car-borda-vermelha">
        <h3 className="lista-titulo lista-titulo-vermelha">
          ⚠️ Frequência Abaixo de 75%
        </h3>
        {frequenciaBaixa.length === 0 ? (
          <p className="lista-vazio" style={{ color: "#16a34a" }}>
            ✅ Todos com frequência adequada!
          </p>
        ) : (
          frequenciaBaixa.map((a) => (
            <div key={a.id} className="lista-item lista-item-risco">
              <strong>{a.nome}</strong>
              <span style={{ color: "#b91c1c", fontWeight: 700 }}>
                {a.frequencia}%
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// App Principal

export default function App() {
  const [alunos, setAlunos] = useState(ALUNOS_EXEMPLO);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  function adicionarAluno(novoAluno) {
    setAlunos([...alunos, novoAluno]);
    setMostrarFormulario(false);
  }

  function removerAluno(id) {
    setAlunos(alunos.filter((a) => a.id !== id));
  }

  const resultado = alunos.length > 0 ? calcularResultados(alunos) : null;

  return (
    <div className="app-container">
      <header className="app-header">
        <div>
          <h1>📚 Sistema do Prof. Carlos</h1>
          <p>Gestão de Notas e Frequência</p>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-num">{alunos.length}</span>
            <span className="stat-label">Alunos</span>
          </div>
          {resultado && (
            <div className="stat">
              <span className="stat-num">{resultado.mediaTurma}</span>
              <span className="stat-label">Média Geral</span>
            </div>
          )}
          {resultado && resultado.frequenciaBaixa.length > 0 && (
            <div className="stat stat-risco">
              <span className="stat-num">
                {resultado.frequenciaBaixa.length}
              </span>
              <span className="stat-label">Em Risco</span>
            </div>
          )}
        </div>
      </header>

      {mostrarFormulario ? (
        <FormularioAluno
          onAdicionar={adicionarAluno}
          onCancelar={() => setMostrarFormulario(false)}
        />
      ) : (
        <div className="card">
          <div className="card-header">
            <h2>Alunos Cadastrados</h2>
            <button
              className="btn-primario"
              onClick={() => setMostrarFormulario(true)}
            >
              + Adicionar Aluno
            </button>
          </div>
          {alunos.length === 0 ? (
            <p className="lista-vazia-msg">
              Nenhum aluno cadastrado. Clique em "Adicionar Aluno" para começar.
            </p>
          ) : (
            <ul className="lista-alunos">
              {alunos.map((a) => (
                <li key={aluno.id} className="item-aluno">
                  <span className="aluno-nome">{a.nome}</span>
                  <span className="aluno-info">
                    Notas: {a.notas.join(", ")} · Frequência: {a.frequencia}
                    %{" "}
                  </span>
                  <button
                    className="btn-remover"
                    onClick={() => removerAliuno(a.id)}
                    title="Remover aluno"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {resultado && (
        <>
          <div className="card">
            <h2>📊 Resultados</h2>
            <TabelaResultados resultado={resultado} />
          </div>
          <ListaAtencao resultado={resultado} />
        </>
      )}
    </div>
  );
}
