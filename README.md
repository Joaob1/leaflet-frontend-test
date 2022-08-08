<p align="center">
  <br>
  <img alt="TerraQ logo" width="150" src="https://terraq.com.br/assets/images/logo/logo.png"/>
  <br>
</p>
 
Repositório contendo as instruções do processo seletivo para desenvolvedor frontend na TerraQ em Ago/22.

# Descrição e objetivos

Este repositório contém uma visualização simples de um mapa centralizado no sudeste do Brasil contendo 10 pontos geográficos. Para acessar o mapa, clique [AQUI](https://terra-q.github.io/leaflet-frontend-test/).

A imagem de fundo (mapa base) deste visualizador vem do repositório do OpenStreetMaps e os pontos geográficos são gerados aleatoriamente por nossa API disponibilizada exclusivamente pelo período deste teste.

Os endpoints disponíveis para este teste estão listados nos tópicos abaixo.

Cada ponto geográfico simula uma estação meteorológica e seus respectivos dados, e, contém uma serie de informações como temperatura, umidade, precipitação, vento e visibilidade.

Para cada um dos 10 pontos geográficos, se acessado por seu respectivo endpoint, é possível visualizar os dados históricos de 180 dias de medições de todas estas variáveis.

Neste teste não há pegadinhas ou detalhes escondidos, então não se preocupe em tentar procurá-los.

Os dados da API são gerados aleatoriamente e não refletem dados da vida real, portanto, se algo lhe parecer estranho, não preocupe.

Também fornecemos informações (dummy) sobre o usuário através de um dos endpoints listados abaixo.

O principal objetivo deste teste é permitir que você demonstre suas habilidades ao lidar com a biblioteca [Leaflet](https://github.com/Leaflet/Leaflet) e consumo de APIs simples.

# Instruções

Para começar, faça um repositório a partir da cópia do original acessando o link (lembre-se de logar com seu usuário GitHub)
> https://github.com/terra-q/leaflet-frontend-test/generate

Após a cópia, clone o repositório localmente:

```
git clone https://github.com/<SEU_USUARIO>/leaflet-frontend-test.git
```

# Endpoints
### BASE URL (GET)
> `https://terraq.com.br/`

### Visão inicial (GET)
> `/api/teste-leaflet/visao-inicial`

### Pontos iniciais (GET)
> `/api/teste-leaflet/pontos`

### Dados do ponto (GET)
> `/api/teste-leaflet/ponto/{id-ponto}`

### Dados do usuário (GET)
> `/api/teste-leaflet/user`


# Avaliação
## Lista de funcionalidades esperadas
- [ ] Ao abrir o visualizador, formatar a visão do mapa (zoom e coordenada central) de acordo com as informações fornecidas pelo endpoint *visão inicial*
- [ ] Alterar o ícone padrão (ícone de alerta) dos pontos para as imagens fornecidas pelo endpoint *pontos*
- [ ] Alteração do pop-up já implementado (ao clicar nos pontos do mapa) utilizando as propriedades adicionais do ponto retornadas pelo endpoint *pontos*
- [ ] Visualização responsiva do elemento #map, ocupando sempre a tela inteira (horizontal e verticalmente), independente do tamanho do dispositivo do usuário
- [ ] Permitir ao usuário alternar entre os dois mapas base fornecidos pelo retorno do endpoint *visão inicial*
- [ ] Criar um menu flutuante com as informações do usuário fornecidas pelo endpoint *dados do usuário*
- [ ] Comentários nos trechos de códigos das funcionalidades originais do repositório inicial
- [ ] Comentários explicando novas funcionalidades desenvolvidas
- [ ] Criar uma visualização dos dados de medições históricas contidas no endpoint *dados do ponto* da maneira que achar mais interessante

## Critérios avaliados
* Cumprimento do checklist das funcionalidades esperadas;
* Clareza do código;
* Boas práticas e escrita nas mensagens de commits realizados;
* Facilidade de manutenção e extensão das novas funções implementadas;
* Criatividade no consumo das informações entregues pela API fornecida;
* Boas práticas em UI/UX;
* Uso de gerenciadores de dependências e build de arquivos minificados no lugar de carregamentos via CDN para customizações;
* Publicação funcional no GitHub pages;
* Soluções criativas para visualização dos dados (especialmente utilizando o endpoint de *dados do ponto*)

# Dicas
* Use o estilo de código mais confortável à você;
* Os nomes de variáveis e comentários no código podem ser feitos em português ou inglês;
* Se o código submetido demandar instalações de quaisquer natureza, espera-se que hajam instruções de instalação no README;
* Feito é melhor que perfeito, submeta seus resultados ainda que estejam parcialmente incompletos.
* Além do Leaflet, aqui na TerraQ também utilizamos bibliotecas como D3.js e Chart.js para data visualization, portanto o uso delas é um plus.

# Submissão
* Faça a cópia do repositório, torne-o privado e adicione os usuários **@terra-q** e **@abreufilho** como colaboradores usando o link abaixo:
  * >https://github.com/SEU_USUARIO/leaflet-frontend-test/settings/access
* Faça as alterações de modo a cumprir as tarefas deste teste, dê os commits necessários e o push final para o seu repositório remoto no GitHub, lembrando de fazê-lo antes do prazo final (09/08/2022 16:59h).
* Em seguida, hospede a página utilizando o [GitHub Pages](https://www.alura.com.br/artigos/como-colocar-projeto-no-ar-com-github-pages)
  * >https://github.com/SEU_USUARIO/leaflet-frontend-test/settings/pages
* A página hospedada deve estar disponível da mesma maneira que o link abaixo:
  * >https://terra-q.github.io/leaflet-frontend-test
* Lembre-se de utilizar sua conta real do GitHub;
* O tempo de entrega *NÃO* está sendo avaliado, mas envios após a data e hora limite serão desconsiderados.
* Nenhum código desenvolvido neste teste será utilizado em produção/comercialmente pela TerraQ.
* Ao concluir a publicação da página em seu GitHub Pages, envie um e-mail para contato@terraq.com.br contendo somente o link no corpo do texto e o título do e-mail contendo *"Teste frontend [Seu Nome]"*, ex.:
  >De: **seunome@gmail.com**

  >Para: **contato@terraq.com.br**

  >Título: **Teste frontend [Seu Nome]**

  >Corpo do e-mail: **https://seuusuario.github.io/leaflet-frontend-test**
   
# Prazo

## Serão considerados pushes realizados até <span style="color:red">**16:59h de 09/08/2022**</span> (terça-feira)

Todos os candidatos receberão o aviso e acesso à este teste simultaneamente, portanto, todos terão exatamente o mesmo tempo e oportunidade.
