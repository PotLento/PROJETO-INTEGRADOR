// 1. Pega referências aos elementos importantes do HTML
const form = document.getElementById('form-selecao-equipe'); // O formulário
const msgSucesso = document.getElementById('msg-sucesso'); // A div de sucesso
const msgErro = document.getElementById('msg-erro'); // A div de erro

// 2. Adiciona um "ouvinte" para o evento 'submit' do formulário
form.addEventListener('submit', function(evento) {
    
    // 3. Impede o comportamento padrão de envio do formulário
    evento.preventDefault(); 
    
    // 4. Verifica se alguma checkbox de técnico está marcada
    const algumTecnicoSelecionado = document.querySelector('input[name="tecnicos[]"]:checked');
    
    // 5. Garante que ambas as mensagens estejam escondidas antes de mostrar a correta
    msgSucesso.style.display = 'none';
    msgErro.style.display = 'none';

    // 6. Condição para mostrar a mensagem apropriada
    if (algumTecnicoSelecionado) {
        // Se encontrou PELO MENOS UM técnico selecionado...
        msgSucesso.style.display = 'block'; // Mostra a mensagem de sucesso
    } else {
        // Se NÃO encontrou NENHUM técnico selecionado...
        msgErro.style.display = 'block'; // Mostra a mensagem de erro
    }
});