const inputName = document.forms.item.name;

console.log(inputName);
inputName.addEventListener('input', (event) => {
    console.log(event.target.value);
});

function test() {
    console.log("A");
    setTimeout(() => {
        console.log("B");
    }, 1000);
    console.log("C");
}

test();

function test2() {
    console.log("A");
    setTimeout(() => {
        console.log("B");
    }, 0);
    console.log("C");
}

test2();

const btnSubmit = document.querySelector('button[type="submit"]');
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Botão clicado");
});

inputName.addEventListener('input', inputName);

function test3(event) {
    console.log(event.target.value);
}

//keyup
inputName.addEventListener('keyup', test3);

//keydown
inputName.addEventListener('keydown', test3);

//keypress
inputName.addEventListener('keypress', test3);

//focus
inputName.addEventListener('focus', test3);

//blur
inputName.addEventListener('blur', test3);

//change
inputName.addEventListener('change', test3);

//submit
const form = document.forms.item;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Formulário enviado");
});