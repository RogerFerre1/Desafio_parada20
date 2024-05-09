var div = document.getElementById("resp")

function calculaMedia(){
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let media = (n1 + n2 + n3) / 3
    let text = "";

        if(media >= 6 && media <= 10){
            text = `Parabéns!!! Você foi aprovado e sua média é: ${media.toFixed(2)}`
        } else{
            text = `Você foi reprovado e sua média é: ${media.toFixed(2)}`
        }


    div.innerHTML = text;
}