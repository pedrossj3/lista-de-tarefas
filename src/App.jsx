import { useState } from "react";
// ícones da biblioteca react-icons (instalar com: npm install react-icons)
import {
 FaClipboardList,
 FaPlus,
 FaTrash,
 FaCheckCircle,
 FaRegCircle,
} from "react-icons/fa";
import "./App.css"; // importa o CSS separado

// Componente principal da lista de tarefas
function App() {
 // texto que o usuário está digitando no input
 const [texto, setTexto] = useState("");

 // lista de tarefas; cada tarefa é um objeto { id, texto, concluida }
 const [tarefas, setTarefas] = useState([]);

 // adiciona uma nova tarefa na lista
 function adicionarTarefa() {
 // não adiciona se o campo estiver vazio (trim remove espaços)
 if (texto.trim() === "") return;

 const novaTarefa = {
 id: Date.now(), // id único simples baseado na hora atual
 texto: texto,
 concluida: false,
 };

 // cria um array novo com as tarefas antigas + a nova (nunca altere o state direto)
 setTarefas([...tarefas, novaTarefa]);

 // limpa o input depois de adicionar
 setTexto("");
 }

 // marca/desmarca uma tarefa como concluída
 function alternarConcluida(id) {
 const listaAtualizada = tarefas.map((tarefa) => {
 // se for a tarefa clicada, inverte o valor de concluida
 if (tarefa.id === id) {
 return { ...tarefa, concluida: !tarefa.concluida };
 }
 // as outras ficam como estão
 return tarefa;
 });

 setTarefas(listaAtualizada);
 }

 // remove uma tarefa da lista
 function removerTarefa(id) {
 // filter mantém só as tarefas com id diferente do removido
 setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
 }

 return (
 <div className="container">
 <h1>
 <FaClipboardList className="icone-titulo" /> Lista de Tarefas
 </h1>

 {/* input controlado: o valor vem do state e atualiza a cada tecla */}
 <div className="formulario">
 <input
 type="text"
 value={texto}
 onChange={(e) => setTexto(e.target.value)}
 placeholder="Digite uma tarefa"
 />
 <button className="btn-adicionar" onClick={adicionarTarefa}>
 <FaPlus /> Adicionar
 </button>
 </div>

 <ul>
 {/* map percorre a lista e cria um <li> para cada tarefa */}
 {tarefas.map((tarefa) => (
 // key ajuda o React a identificar cada item da lista
 <li key={tarefa.id}>
 {/* a classe "concluida" é adicionada só se a tarefa estiver concluída */}
 <span
 className={tarefa.concluida ? "tarefa concluida" : "tarefa"}
 onClick={() => alternarConcluida(tarefa.id)}
 >
 {/* troca o ícone conforme o status da tarefa */}
 {tarefa.concluida ? (
 <FaCheckCircle className="icone-check" />
 ) : (
 <FaRegCircle className="icone-pendente" />
 )}
 {tarefa.texto}
 </span>

 {/* aria-label ajuda leitores de tela, já que o botão só tem ícone */}
 <button
 className="btn-remover"
 onClick={() => removerTarefa(tarefa.id)}
 aria-label="Remover tarefa"
 >
 <FaTrash />
 </button>
 </li>
 ))}
 </ul>
 </div>
 );
}

export default App;