function verificaTemp(){
    
    var temp = document.getElementById('checkcidade').value
    
    if(temp != ""){
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${temp}&lang=pt_br&units=metric&appid=31fea18670d10ad231d0a9f9555291ba`
        var req = new XMLHttpRequest();
        req.open("GET",apiUrl)
        req.send()
    }

    req.onload = function(){
        if(req.status ==200){
            var temperatura = JSON.parse(req.response)
            document.getElementById("txttemp").value = parseInt(temperatura.main.temp)+"°" 

            var tempo = JSON.parse(req.response)
            document.getElementById("txttempo").value = tempo.weather[0].description
            

            var umidade = JSON.parse(req.response)
            document.getElementById("txtumidade").value = parseInt(umidade.main.humidity)+"%"

        }else if(req.status===404){
            alert("Cidade não encontrada")
        }
        else{
            alert("Erro ao Buscar o Cidade")
        }
    }
}


window.onload = function(){
    var txtverificar = document.getElementById("txtverificar")
    txtverificar.addEventListener("click", verificaTemp)
    
}