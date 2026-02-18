const terceirizados = [
    { nome: "Carlos Silva", cargo: "Analista de TI", empresa: "Tech Solutions" },
    { nome: "Maria Oliveira", cargo: "Desenvolvedora Frontend", empresa: "Web Dev Inc" },
    { nome: "Pedro Santos", cargo: "Designer Gráfico", empresa: "Creative Studio" },
    { nome: "Ana Costa", cargo: "Gerente de Projetos", empresa: "Project Management Co" },
    { nome: "Roberto Almeida", cargo: "Engenheiro de Software", empresa: "Software House" }
];

console.log(terceirizados);

// filter
const developers = terceirizados.filter(p => p.cargo.toLowerCase().includes("desenvolvedor"));
console.log(developers);

// map
const names = terceirizados.map(p => p.nome);
console.log(names);

// find
const designer = terceirizados.find(p => p.cargo.toLowerCase().includes("designer"));
console.log(designer);

// some
const hasProjectManager = terceirizados.some(p => p.cargo.toLowerCase().includes("gerente de projetos"));
console.log(hasProjectManager);

// every
const allHaveCompany = terceirizados.every(p => p.empresa);
console.log(allHaveCompany);

// reduce
const companyCount = terceirizados.reduce((acc, p) => {
    acc[p.empresa] = (acc[p.empresa] || 0) + 1;
    return acc;
}, {});
console.log(companyCount);

// sort
const sortedByName = [...terceirizados].sort((a, b) => a.nome.localeCompare(b.nome));
console.log(sortedByName);

// unique companies
const uniqueCompanies = [...new Set(terceirizados.map(p => p.empresa))];
console.log(uniqueCompanies);

// using functions
const isDeveloper = p => p.cargo.toLowerCase().includes("desenvolvedor");
const developersUsingFunction = terceirizados.filter(isDeveloper);
console.log(developersUsingFunction);

const isFromTechSolutions = p => p.empresa === "Tech Solutions";
const fromTechSolutions = terceirizados.filter(isFromTechSolutions);
console.log(fromTechSolutions);

const getCompany = p => p.empresa;
const companies = terceirizados.map(getCompany);
console.log(companies);

const countByCompany = (acc, p) => {
    acc[p.empresa] = (acc[p.empresa] || 0) + 1;
    return acc;
};
const companyCountUsingFunction = terceirizados.reduce(countByCompany, {});
console.log(companyCountUsingFunction);