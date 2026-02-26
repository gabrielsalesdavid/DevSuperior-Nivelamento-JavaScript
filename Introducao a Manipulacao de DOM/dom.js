console.log(window);
console.log(document);

window.alert('Olá, mundo!');
document.write('Olá, mundo!');
document.getElementById('meuElemento').innerText = 'Olá, mundo!';
document.querySelector('.minhaClasse').style.color = 'red';
document.querySelectorAll('p').forEach(p => p.style.fontSize = '20px');