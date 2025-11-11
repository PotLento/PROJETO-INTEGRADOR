function mostrarStatus(status) {
    // Esconde ambos os status primeiro
    document.getElementById('status-reprovado').style.display = 'none';
    document.getElementById('status-aprovado').style.display = 'none';

    if (status === 'reprovado') {
        document.getElementById('status-reprovado').style.display = 'inline-block';
    } else if (status === 'aprovado') {
        document.getElementById('status-aprovado').style.display = 'inline-block';
    }
}       