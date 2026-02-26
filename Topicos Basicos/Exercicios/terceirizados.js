const dados = [
    {
        nome: "Maria Silva",
        valorHora: 80.00,
        horasTrabalhadas: 20,
        terceirizado: true,
    },
    {
        nome: "João Rocha",
        valorHora: 60.00,
        horasTrabalhadas: 25,
        terceirizado: false,
    },
    {
        nome: "Thiago James",
        valorHora: 80.00,
        horasTrabalhadas: 10,
        terceirizado: true,
    },
    {
        nome: "Ana Carla",
        valorHora: 70.00,
        horasTrabalhadas: 40,
        terceirizado: true,
    },
    {
        nome: "Pedro Paulo",
        valorHora: 50.00,
        horasTrabalhadas: 25,
        terceirizado: false,
    },
];

function funcionariosTerceirizados(list) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].terceirizado) {
            result.push(list[i]);
        }
    }
    return result;
}

function custoTotal(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        const subTotal = list[i].valorHora * list[i].horasTrabalhadas;
        total += subTotal;
    }
    return total;
}

const terceirizados = funcionariosTerceirizados(dados);
const custoTerceirizados = custoTotal(terceirizados);
console.log(`Custo total dos funcionarios terceirizados: R$ ${custoTerceirizados.tofixed(2)}`);