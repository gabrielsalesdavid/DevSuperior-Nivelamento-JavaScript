const cep = "01001000";

fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(`Erro: ${error}`));

// Usando async/await
async function buscarCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`Erro: ${error}`);
    }
}

buscarCep(cep);