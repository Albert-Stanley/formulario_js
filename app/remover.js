function remover() {
    // Obtenha o email digitado no campo de consulta
    let emailConsulta = document.getElementById('consulta').value;

    // Verifique se o email existe no localStorage
    let dados = localStorage.getItem(emailConsulta);

    if (dados) {
        // Remover os dados do localStorage
        localStorage.removeItem(emailConsulta);
        alert('Cadastro removido com sucesso!');
        console.log('Cadastro removido:', emailConsulta);

        // Limpar a tabela, caso esteja exibida
        let tabela = document.getElementById('minhaTabela');
        tabela.style.display = 'none';

        //limpa o campo com o email removido
        consulta.value = ''
    } else {
        alert('Cadastro não encontrado para o email informado.');
    }
}
