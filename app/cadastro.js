function cadastrar() {
  // Cria um objeto de cadastro utilizando a Factory
  let cadastro = criarCadastro(
      document.getElementById('nome').value,
      document.getElementById('nascimento').value,
      document.getElementById('email').value,
      document.getElementById('telefone').value
  );

  // Armazena o objeto no localStorage usando o email como chave
  localStorage.setItem(cadastro.email, JSON.stringify(cadastro));

  console.log('Cadastro salvo:', cadastro);
  alert('Cadastro realizado com sucesso!');
  
  //limpa os campos apos clicar em salvar
  nome.value = ''
  nascimento.value = ''
  email.value = ''
  telefone.value = ''

}
