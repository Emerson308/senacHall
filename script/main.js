// Elementos e configurações principais
const load = document.getElementById('Func');

// Função para carregar agendamentos
function carregarAgendamentos() {
    try {
        const btnAgendamentos = document.getElementById('btnAgendamentos');
        btnAgendamentos.classList.add('funcionalidadeSelecionada');
        
        const headerAgendamentos = document.getElementById('titleAgendamentos');
        if (headerAgendamentos) {
            headerAgendamentos.click();
        }
    } catch (erro) {
        console.log(erro);
    }
}

// Função para carregar páginas no div
async function loadPageIntoDiv(url, divId) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        
        const divSec = document.getElementById(divId);
        divSec.innerHTML = data;
        
        if (url === 'agendamento.html') {
            carregarAgendamentos();
        }
    } catch (erro) {
        console.error('Erro ao carregar a página:', erro);
    }
}

// Gerenciamento do menu
function setupMenu() {
    const Menu = document.querySelectorAll("#menu li");
    Menu.forEach(item => {
        item.addEventListener("click", function () {
            // Remove a classe de todos os itens
            Menu.forEach(el => el.classList.remove("funcionalidadeSelecionada"));
            
            // Adiciona ao item clicado
            this.classList.add("funcionalidadeSelecionada");
        });
    });
}

// Carregamento inicial
async function inicializar() {
    try {
        setupMenu();
        await loadPageIntoDiv('agendamento.html', 'Func');
    } catch (erro) {
        console.log("Erro no carregamento inicial:", erro);
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', inicializar);

