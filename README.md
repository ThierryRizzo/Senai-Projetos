# Projeto de Gestão de TCC - Firebase e Node.js

Este projeto é um sistema de gerenciamento de TCC desenvolvido em **JavaScript**, com **Firebase Firestore** e **Firebase Authentication** no back-end, utilizando **Node.js** para lógica de negócios e controle de permissões. O sistema permite que diferentes tipos de usuários (alunos, orientadores, professores e coordenadores) gerenciem e visualizem projetos de TCC de forma eficiente e segura.

## Funcionalidades

- **Gestão de Usuários**:
  - Diferentes tipos de usuários: aluno, orientador, professor e coordenador.
  - Autenticação via Firebase Authentication.
  - Permissões específicas com base no tipo de usuário.

- **Gestão de Cursos, Turmas e Projetos**:
  - Criação e gerenciamento de cursos, turmas e projetos.
  - Alunos líderes criam e gerenciam seus próprios projetos.
  - Orientadores acessam projetos das turmas que orientam.
  - Coordenadores podem visualizar e editar todos os projetos.
  - Professores têm acesso para visualizar todos os projetos.

- **Notificações e Automação**:
  - Notificações automáticas via Firebase Cloud Functions ao atualizar projetos.
  - Lógica de negócios implementada no back-end para controle de acesso e validação.

## Estrutura do Banco de Dados - Firebase Firestore

### Coleções

1. **`usuarios`**:
   - Armazena todos os tipos de usuários.
   - Campos principais: `nome_completo`, `email`, `senha (hash)`, `tipo_usuario`.

2. **`cursos`**:
   - Contém todos os cursos oferecidos.
   - Campos principais: `nome`, `coordenador_id` (referência a um usuário coordenador).

3. **`turmas`**:
   - Contém as turmas, com dados sobre curso, turno e orientador.
   - Campos principais: `nome`, `turno`, `ano`, `curso_id`, `orientador_id`.

4. **`projetos`**:
   - Armazena todos os projetos de TCC, com dados completos do projeto.
   - Campos principais: `nome`, `descricao`, `componentes`, `bm_canvas`, `pm_canvas`, `video_pitch`, `documento_adicional`, `link`, `turma_id`, `lider_id`.

### Exemplo de Estrutura JSON

```json
"usuarios": {
  "usuario_1": {
    "nome_completo": "João Silva",
    "email": "joao@email.com",
    "senha": "hash_da_senha",
    "tipo_usuario": "aluno"
  },
  "usuario_2": {
    "nome_completo": "Maria Souza",
    "email": "maria@email.com",
    "senha": "hash_da_senha",
    "tipo_usuario": "orientador"
  }
}


## Configuração do Projeto

### 1. Clone o Repositório

Para clonar o repositório, execute:

```bash
git clone https://github.com/SEU_USUARIO/gestao-de-tcc.git
cd gestao-de-tcc

2. Se já houver arquivos locais sem Git iniciado

Caso você já tenha arquivos prontos no diretório local e ainda não tenha iniciado o Git, siga os passos abaixo para configurar este repositório como remoto:
