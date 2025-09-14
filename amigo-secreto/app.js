// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let campoNombre = document.getElementById('nome-amigo');
let listaAmigos = document.getElementById('lista-amigos');
let seccionResultado = document.getElementById('resultado');

function adicionar() {
    let nombre = campoNombre.value;
    if (nombre == '') {
        alert('Por favor, digite un nombre.');
        return;
    }
    amigos.push(nombre);
    listaAmigos.innerHTML = amigos.join(', ');
    campoNombre.value = '';
}

function sortear() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos participantes para el sorteo.');
        return;
    }

    let amigosMezclados = [...amigos];
    amigosMezclados.sort(() => Math.random() - 0.5);
    
    seccionResultado.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === amigosMezclados[i]) {
            sortear();
            return;
        }
        seccionResultado.innerHTML += `<p>${amigos[i]} --> ${amigosMezclados[i]}</p>`;
    }
}

function reiniciar() {
    amigos = [];
    listaAmigos.innerHTML = '';
    seccionResultado.innerHTML = '';
}