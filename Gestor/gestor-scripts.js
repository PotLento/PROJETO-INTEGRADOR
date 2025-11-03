function mostrarStatus(status) {
    // Esconde ambos os status primeiro
    document.getElementById('status-reprovado').style.display = 'none';
    document.getElementById('status-aprovado').style.display = 'none';

    if (status === 'reprovado') {
        document.getElementById('status-reprovado').style.display = 'inline-block';
    } else if (status === 'aprovado') {
        document.getElementById('status-aprovado').style.display = 'inline-block';
    }
    
    // Opcional: Desabilitar botões após clicar
    // document.querySelector('.analysis-actions .reject').disabled = true;
    // document.querySelector('.analysis-actions .approve').disabled = true;
}

// Para testar a mensagem de "Não há solicitações", descomente as duas linhas abaixo:
// document.querySelector('.analysis-box').style.display = 'none'; // Esconde a caixa de análise
// document.querySelector('.no-requests-message').style.display = 'block'; // Mostra a mensagem