
document.getElementById("acessibilidade").style.display = "none";

function acessibilidade() {
    document.getElementById("acessibilidade").style.display = "block"; 
}

function buttonFechar() {
    document.getElementById("acessibilidade").style.display = "none"; 
}

let contrasteAtivo = false;

function alterarContraste() {
    contrasteAtivo = !contrasteAtivo;

    if (contrasteAtivo) {
        document.body.classList.add("alto-contraste");
    } else {
        document.body.classList.remove("alto-contraste");
    }
}

function fontPadrao() {
    const paragrafos = document.querySelectorAll('p');
    const h1 = document.querySelectorAll('h1');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const tamanhoAcessibilidade = document.querySelectorAll('aside');

    paragrafos.forEach(paragrafo => {
    paragrafo.style.fontSize = '1rem';
});

    h1.forEach(h1 => {
    h1.style.fontSize = '2.5rem';
});

    h2.forEach(h2 => {
    h2.style.fontSize = '1.5rem';
});

    h3.forEach(h3 => {
    h3.style.fontSize = '1.2rem';
});

    tamanhoAcessibilidade.forEach(tamanhoAcessibilidade => {
        tamanhoAcessibilidade.style.maxWidth = "500px";
});

    tamanhoAcessibilidade.forEach(tamanhoAcessibilidade => {
        tamanhoAcessibilidade.style.maxHeight = "400px";
});

    
}

function fontGrande() {
    const paragrafos = document.querySelectorAll('p');
    const h1 = document.querySelectorAll('h1');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const tamanhoAcessibilidade = document.querySelectorAll('aside');

    paragrafos.forEach(paragrafo => {
    paragrafo.style.fontSize = '1.5rem';
});

    h1.forEach(h1 => {
    h1.style.fontSize = '3rem';
});

    h2.forEach(h2 => {
    h2.style.fontSize = '2rem';
});

    h3.forEach(h3 => {
    h3.style.fontSize = '1.7rem';
});

    tamanhoAcessibilidade.forEach(tamanhoAcessibilidade => {
        tamanhoAcessibilidade.style.maxWidth = '530px';
});

    tamanhoAcessibilidade.forEach(tamanhoAcessibilidade => {
        tamanhoAcessibilidade.style.maxHeight = '440px';
})

}

function fontExtragrande() {
    const paragrafos = document.querySelectorAll('p');
    const h1 = document.querySelectorAll('h1');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const tamanhoAcessibilidade = document.querySelectorAll('aside');

    paragrafos.forEach(paragrafo => {
    paragrafo.style.fontSize = '2rem';
});

    h1.forEach(h1 => {
    h1.style.fontSize = '3.5rem';
});

    h2.forEach(h2 => {
    h2.style.fontSize = '2.5rem';
});

    h3.forEach(h3 => {
    h3.style.fontSize = '2.2rem';
});

    tamanhoAcessibilidade.forEach(tamanhoAcessibilidade => {
        tamanhoAcessibilidade.style.maxWidth = '580px';
});

    tamanhoAcessibilidade.forEach(tamanhoAcessibilidade => {
        tamanhoAcessibilidade.style.maxHeight = '480px';
});

}




const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}


function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`
}


function resetInterval() {
clearInterval(interval)
interval = setInterval(run, 2000)

}

function validarItem() {
    if (nome.value.trim() === "") {
        nome.style.background = "#b3093f";
        nome.style.color = "#fff";
        alert("Preencha o campo com seu pedido!");
        return false;
    }
    else {
        nome.style.background = "white";
        nome.style.color = "black";
        return true;
    }
}

const form = document.querySelector("#itemForm");
const lista = document.querySelector("#listaPedidos");

function cadastrar() {
    event.preventDefault();

    const item = document.querySelector("#item").value.trim();

    if (item === "" ) {
        alert("Por favor, preencha o campo com seu pedido!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
    <span>${item}</span>
    <button onclick="removerCliente(this)">Remover</button>
    `;

    lista.appendChild(li);

    form.reset();
}

function removerCliente(botao) {
    botao.parentElement.remove();
}