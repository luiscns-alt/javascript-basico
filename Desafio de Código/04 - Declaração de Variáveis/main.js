try {
    //Informe seu código aqui

    var nome = "Treinaweb";
    let curso = "JavaScript Básico";
    const PI = 3.14;

    //Não precisa se preocupar com este código
    try {
        PI = 3;
        console.log("A variável definida precisa ser uma constante!");
    } catch (e) {
        console.log(PI);
    }

    console.log(curso);
} catch (e) {}
console.log(nome);
try {
    console.log(curso);
} catch (e) {}
