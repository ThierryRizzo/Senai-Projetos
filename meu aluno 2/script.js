// === DOM ===
const projectsList = document.getElementById('projects-list'); // Tabela de projetos

// Função para carregar os projetos da lista
function loadProjects() {
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
                        <button class="delete-btn" onclick="deleteProject()">Excluir</button>
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

// Função para excluir o projeto
function deleteProject() {
    if (confirm("Tem certeza que deseja excluir o projeto?")) {
        localStorage.removeItem('projeto'); // Remove o projeto do localStorage
        loadProjects(); // Atualiza a lista de projetos
    }
}

// Função para exibir ou esconder o menu de ações
function togglePicker(button) {
    const pickerContent = button.nextElementSibling;
    pickerContent.style.display = pickerContent.style.display === 'none' ? 'block' : 'none';
}

// Carregar projetos ao carregar a página
document.addEventListener('DOMContentLoaded', loadProjects);
