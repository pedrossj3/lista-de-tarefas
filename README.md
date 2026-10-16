# 📝 Lista de Tarefas

> Aplicação web de lista de tarefas desenvolvida com React, com foco nos fundamentos da biblioteca: componentes, estado, eventos e renderização de listas.

![Preview da Lista de Tarefas](assets/preview.png)

---

## 🌐 Projeto

🔗 **[Acessar o projeto online](COLE-O-LINK-DO-PROJETO-AQUI)**

💻 **[Ver código no GitHub](COLE-O-LINK-DO-GITHUB-AQUI)**

---

## 📌 Sobre o projeto

A **Lista de Tarefas** é uma aplicação web simples para organizar o que precisa ser feito.

O usuário pode adicionar tarefas, marcá-las como concluídas e removê-las da lista, com o visual atualizando na hora a cada ação.

O projeto foi desenvolvido com **React** e **Vite**, com o código totalmente comentado para facilitar a leitura e o estudo.

---

## ⚙️ Funcionalidades

- ➕ Adicionar novas tarefas
- ✅ Marcar e desmarcar tarefas como concluídas
- 🗑️ Remover tarefas da lista
- ⚠️ Validação para não aceitar tarefas vazias
- 🎨 Ícones que mudam conforme o status da tarefa
- 💅 Interface colorida e organizada

---

## 🛠️ Tecnologias utilizadas

### React

Utilizado para construir a interface e controlar o estado da aplicação.

### Vite

Utilizado para criar e executar o projeto de forma rápida em ambiente de desenvolvimento.

### React Icons

Biblioteca de ícones utilizada para os botões e indicadores de status.

### CSS3

Utilizado em arquivo separado para o layout, as cores e a apresentação visual da lista.

---

## 🧠 Conceitos de React praticados

- `useState` para controlar o texto digitado e a lista de tarefas
- Input controlado (o valor do campo vem do estado)
- Renderização de listas com `map` e uso de `key`
- Atualização imutável do estado com spread operator, `map` e `filter`
- Eventos (`onClick` e `onChange`)
- Renderização condicional de ícones e classes CSS

---

## 🔄 Lógica da aplicação

O funcionamento principal do sistema segue o fluxo:

```text
Usuário digita uma tarefa
 ↓
Clica em "Adicionar"
 ↓
Sistema valida se o campo não está vazio
 ↓
Tarefa é adicionada ao estado
 ↓
React atualiza a lista na tela
 ↓
Usuário marca como concluída ou remove a tarefa
 ↓
Estado é atualizado e a interface é redesenhada
```

---

## 📁 Estrutura do projeto

```text
src/
├── App.jsx # componente principal (lógica e estrutura da lista)
├── App.css # estilos da aplicação
└── main.jsx # ponto de entrada do React
```

---