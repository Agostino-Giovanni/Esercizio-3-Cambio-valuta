function dark(){
    let back, sw;
    back=document.getElementById("bod");
    back.style.backgroundColor="black";
    sw=document.getElementById("icons");
    sw.innerHTML="<i class='bi bi-toggle2-on'></i>"

}

function conversione(){
    let conversioneDollari, conversioneSterline, conversioneYen, n;
    n=document.getElementById("valuta").value;
    conversioneYen=n*176.83;
    conversioneSterline=n*0.84;
    conversioneDollari=n*1.11;
    document.getElementById("dollari").innerHTML = conversioneDollari;
    document.getElementById("sterlina").innerHTML = conversioneSterline;
    document.getElementById("yen").innerHTML = conversioneYen;
}