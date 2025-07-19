const alunos = [
    { nome: 'João', curso: 'frontend', nota: 7.5 },
    { nome: 'Maria', curso: 'backend', nota: 8.5 },
    { nome: 'Pedro', curso: 'backend', nota: 5.5 },]

function aprovados(item) {
    return item.filter(function(aluno) {
        return aluno.nota >= 6;
});
}

const alunosAprovados = aprovados(alunos);
console.log(alunosAprovados);