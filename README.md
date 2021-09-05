# ArseniumGX API Fullstack

Está um uma API temática desenvolvida para integra um catálogo frontend construído em react com o intúito de por em prática todos os conhecimento adquido no decorro do módulo 3 do curso de certificação de devs (Fullstack). O presente projeto foi ainda está em desenvolvimento.

Para testar a o funcionamento da api [clique aqui](https://bluefls-api.herokuapp.com/api). Você encontrará as informações necessárias para testar cada rota.

## Testes Locais
Você pode testar a api localmente após clonar o repositório. Para isto, crie crie um arquivo .env.dev com as definições expecificadas no arquivo .env.example

Feito isso execute o comando ```yarn install``` ou ```npm install``` para instalar as dependências necessárias para execução da aplicação. Após isso, execute ```yarn dev``` ou ``` npm run dev``` para execução da aplicação em ambiente local.

**OBS:** Não execute o scritp start, o mesmo apenas existe para o deplay. Se tentar executar localmente vai da erros, pois o mesmo requer algumas configurações.

## APIs
Até o momente, apenas a api na da rota /api/movies está implentada. As demais, /api/musics e /api/games, ainda estão em fase de planejamento. Sim! Faço tudo sempre do zero, não aplico a cultura de copiar e colar, e so mudar os acentos e vírgulas. Gosto de fazer e entender cada comando que coloco.

### API Movies
Teste a api acessando ```<hostname:port>/api/movies```. Utilize o modelo de entrada de dados abaixo como referencia:

```json
{
	"title": "*required",
	"synopsis": "",
	"release": 1900,
	"director": [],
	"gender": [],
	"trailer": "",
	"imageURL": ""
}
```

### API Games
_EM DESENVOLVIMENTO_


### API Musics
_EM DESENVOLVIMENTO_

