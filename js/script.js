var map = L.map('map')
$(".historico").hide();


// Consultando endpoint para formatar a visão inicial e os estilos de mapa
$.getJSON("https://terraq.com.br/api/teste-leaflet/visao-inicial", function(data) {}).done(
    function(data){
        map.setView(data.initial_view.center, data.initial_view.zoom);
        const mapa1 = data.tile_layers[0].name;
        const mapa2 = data.tile_layers[1].name;
        var baseMaps = {
            [mapa1]: L.tileLayer(data.tile_layers[0].url, {maxZoom: 19}).addTo(map),
            [mapa2]: L.tileLayer(data.tile_layers[1].url, {maxZoom: 19})
        }
        L.control.layers(baseMaps).addTo(map);
    }
)

// Consultando endpoint para resgatar dados do usuário
$.getJSON("https://terraq.com.br/api/teste-leaflet/user", function(data) {}).done(
    function(data){
        $(".usuario").append(`<img src="${data.avatar}"/>`);
        $(".usuario").append(`<strong>${data.nome}</strong>`);
        $(".usuario").append(`<span class="data_nascimento">${data.data_nascimento}</span>`)
        $(".usuario").append(`<span class="email">${data.email}</span>`)
        $(".usuario").append(`<span class="telefone">${data.telefone}</span>`)
    }
)

// Função para criação dos ícones de popUp e funcionalidades
function onEachFeature(feature, layer) {
    var popupContent = '<p>' + feature.properties.name + '</p>';
    if (feature.properties && feature.properties.popupContent) {
        popupContent += "<br>Precipitação: "+feature.properties.precipitacao;
        popupContent += "<br>Temperatura: "+feature.properties.temperatura
        popupContent += "<br>Umidade: "+feature.properties.umidade
        popupContent += "<br>Vento: "+feature.properties.vento
        popupContent += "<br>Visibilidade: "+feature.properties.visibilidade
    }

    // Adição de histórico meteorológico para cada um dos popUps
    if(feature.properties.historico_ponto){
        // Consultando endpoint para resgatar informações do histórico de cada popUp
        $.getJSON(feature.properties.historico_ponto, function(data){}).done(
            function(data){
                // Evento de clique para exibir ou não a lista de histórico do popUp
                $(layer).click(() => {
                    $(".historico").empty();
                    // Para cada amostra de dados, adição de um novo item para a listagem do histórico
                    data.forEach((item) => {
                        $(".historico").append(`
                        <div>
                        <span class="data_historico">Data: <br>${item.data}</span>
                        <span class="precipitacao_historico">Precipitação: <br>${item.precipitacao}</span>
                        <span class="temperatura_historico">Temperatura: <br>${item.temperatura}</span>
                        <span class="umidade_historico">Umidade: <br>${item.umidade}</span>
                        <span class="vento_historico">Vento: <br>${item.vento}</span>
                        <span class="visibilidade_historico">Visibilidade: <br>${item.visibilidade}</span>
                        </div>
                        `)
                    })
                    // Fechamento da listagem do histórico quando o popUp estiver fechado
                    if(!layer.isPopupOpen()){
                        $(".historico").empty();
                        $(".historico").hide();
                    }
                    // Abertura da listagem do histórico quando o popUp estiver aberto
                    else{
                        $(".historico").show();
                    }
                })
            }
            )
        }
        
        layer.bindPopup(popupContent, {
            autoClose: true,
            closeOnClick: false,
            keepInView: true,
            closeButton: false
        });
}

// Consultando endpoint para resgatar os dados dos pontos referentes aos popUps.
$.getJSON("https://terraq.com.br/api/teste-leaflet/pontos", function(data) {}).done(
    function(data) {
        var featureCollection = L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                var featureIcon = L.icon({
                    // Mudança no ícone dos popUps
                    iconUrl: feature.properties.icon,
                    iconSize: [32, 37],
                    iconAnchor: [16, 37],
                    popupAnchor: [0, -28]
                });
                return L.marker(latlng, {icon: featureIcon});
            },
            // Chamada da função para edição dos popUps.
            onEachFeature: onEachFeature
            // Adição dos popUps ao mapa
        }).addTo(map);
    }		
);

// Verificação para parar o funcionamento do zoom no mapa quando o mouse entra na div de histórico dos popUps
$(".historico").hover((e) => {
    if(e.type === 'mouseenter'){
        map.dragging._draggable._enabled = false;
        map.scrollWheelZoom.disable() 
    }
    else{
        map.scrollWheelZoom.enable()
        map.dragging._draggable._enabled = true;
    }
})