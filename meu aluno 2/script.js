// script.js

// Função para mostrar/ocultar o picker
function togglePicker(button) {
    const picker = button.nextElementSibling;
    picker.style.display = picker.style.display === 'none' || !picker.style.display ? 'block' : 'none';
}

// Função para carregar o projeto da lista
function loadProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = ''; // Limpa a tabela antes de adicionar os projetos

    // Verifica se há um projeto salvo no localStorage
    const project = JSON.parse(localStorage.getItem('projeto'));

    if (project) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${project.nome}</td>
            <td>${project.curso}</td>
            <td>${project.turma}</td>
            <td>${project.turno}</td>
            <td>${project.orientador}</td>
            <td>
                <div class="action-menu">
                    <button class="action-btn" onclick="togglePicker(this)">⋮</button>
                    <div class="picker-content" style="display: none;">
                        <button class="edit-btn" onclick="editProject('${project.nome}')">Editar</button>
                        <button class="delete-btn" onclick="deleteProject('${project.nome}')">Excluir</button>
                    </div>
                </div>
            </td>
        `;
        projectsList.appendChild(row);
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="6">Nenhum projeto encontrado.</td>`;
        projectsList.appendChild(row);
    }
}

// Função para editar um projeto
function editProject(projectName) {
    alert(`Editar projeto: ${projectName}`);
    // Aqui você pode redirecionar para a página de edição ou abrir um modal para editar o projeto
}

// Função para excluir um projeto
function deleteProject(projectName) {
    if (confirm(`Tem certeza que deseja excluir o projeto: ${projectName}?`)) {
        localStorage.removeItem('projeto');
        loadProjects(); // Atualiza a lista de projetos
    }
}

// Chama a função de carregar os projetos ao carregar a página
document.addEventListener('DOMContentLoaded', loadProjects);
