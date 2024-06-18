"use strict";
const alunos = [
    {
        nome: "Breno",
        cursos: ["Front-end", "ingles"],
        idade: 21,
    },
    {
        nome: "Yasmin",
        cursos: ["QA", "ingles"],
        idade: 22,
    }
];
alunos.push({
    nome: "julia",
    cursos: ["Arquitetura"],
    idade: 27
});
const novoAluno = {
    nome: "Lucas",
    idade: 14
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
