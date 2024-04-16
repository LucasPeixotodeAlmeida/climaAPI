const key = "92386b8f6a7d4183701c52ee4f26de09"

function popularTela(dados){
    document.querySelector("h2").innerHTML = "Clima em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-prev").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarAPI(input){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then( resp => resp.json())

    popularTela(dados)
}

function busca(){
    const input = document.querySelector(".input-city").value;

    buscarAPI(input)
}

