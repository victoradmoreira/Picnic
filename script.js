
let botao = document.querySelector(".menu-btn");

botao.onclick = clickMenu;

function clickMenu() {
  let nav = document.querySelector(".nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
    let ul = document.querySelector(".ul");
    if (ul.style.display === "column") {
    ul.style.display = "flex";
    } else {
    ul.style.display = "column";
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('evento-form');
    const tableBody = document.getElementById('tabela-corpo');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obter os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const quantidade = document.getElementById('quantidade').value;
        const horario = document.getElementById('horario').value;
        const comida = document.getElementById('comida').value;
        const bebida = document.getElementById('bebida').value;
        const atividade = document.getElementById('atividade').value;

        // Criar uma nova linha na tabela
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
            <td>${quantidade}</td>
            <td>${horario}</td>
            <td>${comida}</td>
            <td>${bebida}</td>
            <td>${atividade}</td>
        `;

        // Adicionar a nova linha à tabela
        tableBody.appendChild(newRow);

        // Limpar os campos do formulário após adicionar à tabela
        form.reset();
    });
});
