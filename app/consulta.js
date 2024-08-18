function consultar() {
    // Obtenha o email digitado no campo de consulta
    let emailConsulta = document.getElementById('consulta').value;

    // Verifique se o email existe no localStorage
    let dados = localStorage.getItem(emailConsulta);

    if (dados) {
        // Parse os dados de volta para um objeto
        dados = JSON.parse(dados);

        // Exiba os dados na tabela
        let tabela = document.getElementById('minhaTabela');
        let tbody = tabela.getElementsByTagName('tbody')[0];

        // Limpar qualquer conteúdo existente
        tbody.innerHTML = '';

        // Adiciona uma nova linha com os dados
        let novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${dados.nome}</td>
            <td>${dados.dataNascimento}</td>
            <td>${dados.email}</td>
            <td>${dados.telefone}</td>
        `;
        tbody.appendChild(novaLinha);

        // Exiba a tabela
        tabela.style.display = 'table';

        console.log('Consulta realizada:', dados);
    } else {
        alert('Cadastro não encontrado para o email informado.');
    }
}
