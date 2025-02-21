document.getElementById('calcular').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const dataFalecimento = document.getElementById('dataFalecimento').value ? new Date(document.getElementById('dataFalecimento').value) : new Date();

    // Validação das datas
    if (isNaN(dataNascimento.getTime()) || dataNascimento >= new Date()) {
        alert("Por favor, insira uma data de nascimento válida que seja anterior à data atual.");
        return;
    }
    if (dataFalecimento && dataFalecimento <= dataNascimento) {
        alert("A data de falecimento deve ser posterior à data de nascimento.");
        return;
    }

    const diferencaMs = dataFalecimento - dataNascimento;

    // Conversão para dias, semanas, meses e anos 
    const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
    const anos = Math.floor(dias / 365);
    const meses = Math.floor(dias / 30);
    const semanas = Math.floor(dias / 7);

    // Exibição do resultado
    document.getElementById('resultado').innerText =` ${nome} já viveu aproximandamente:\n- ${dias} dias\n- ${semanas} semanas\n- ${meses} meses\n- ${anos} anos`;
});