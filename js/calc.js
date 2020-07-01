/* A funcção recebe dois parâmentros tipo e valor, em seguida valida se o tipo é uma
ação, se for uma ação é capturado o valor desta ação e aplicado no visor. */
function calcular(tipo, valor){
    if(tipo ==='acao'){
        // Aplicando a lógica de limpar o campo
        if(valor === 'c'){
            document.getElementById('visor').value = ''
        }
        //aplicando a lógica dos operadores.
        if(valor === '/' || valor ==='*' || valor === '-' || valor === '+' || valor === '.' ) { 
            document.getElementById('visor').value += valor
            console.log(tipo, valor)
        }
        //aplicando a lógica do operador igual
        if(valor === '=') {
            var resultado = eval(document.getElementById('visor').value)
            document.getElementById('visor').value = resultado
        }

    }else if(tipo === 'valor') {
        document.getElementById('visor').value += valor
    }
}