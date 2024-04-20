function comparar(){
    let valorNumeroA = document.getElementById('numeroA').value
    let valorNumeroB = document.getElementById ('numeroB').value
    let numeroA = parseInt(valorNumeroA);
    let numeroB = parseInt(valorNumeroB);

    if (!isNaN(numeroA) && !isNaN(numeroB)){
        if (numeroA > numeroB){
            alert("o numero A é maiora que o B");
        } else if ( numeroB > numeroA){
            alert("o numero B é maior que o A")
        }
    }
}
