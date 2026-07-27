
document.addEventListener('DOMContentLoaded', () => {

    const geolocalizacao = document.getElementById('li-principal');

    function posicaoEncontrada(posicao) {
        const coodenadas_Latitude = posicao.coords.latitude;
        const coodenadas_Longitude = posicao.coords.longitude;
         geolocalizacao.innerHTML = `Lat = ${coodenadas_Latitude} e Lon = ${coodenadas_Longitude}`;   

        console.log(`Localização obtida com sucesso! Latitude : ${coodenadas_Latitude}, Longitude: ${coodenadas_Longitude}`);
    }

    function erroNaLocalizacao(error) {
        console.warn(`Erro ao obter localização (${error.code}): ${error.message}`);
        console.log('Carregando dados da cidade padrão...');
    }

    function solicitarLocalizacao() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(posicaoEncontrada, erroNaLocalizacao, {
                enableHighAccuracy: true,
                timeout: 15000, 
                maximumAge: 0
            });
        } else {
            console.log('Geolocalização não é suportada por este navegador.');
        }
    }
    solicitarLocalizacao();
});
