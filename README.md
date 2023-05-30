<h1>Projeto de automação - Micromed</h1>

 Configurando sua máquina
-------------------------
 Necessário instalar:
-----------------------

*	Node js, recomendado usar versão LTS.
*	Cmder for Windows: Sistema que trás as funcionalidades bash (Terminal) para o Windows.


Configurando o ambiente de automação de testes Web
------------------------------------------------------------

Para que sua automação possa ser realizada é necessário instalar alguns recursos, conforme será descrito abaixo:

Windows
--------

<h3>1. Instalando o Console do Cmder</h3>

*	Baixe em: <https://github.com/cmderdev/cmder/releases/download/v1.3.16/cmder.zip> .
*	Descompactar na pasta C:\Cmder.
*	Selecione o cmder.exe e arrastar até sua barra de ferramentas do Windows para criar um atalho.
*	Executar o cmder.exe.

<h3>2. Instalando o Node js para Windows</h3>

*	Baixe em: <https://nodejs.org/en/>.
*	Executar o arquivo baixado e seguir as instruções clicando em ‘next’.
*	No Console do Cmder, digite o comando node –v , se a instalação estiver correta aparecerá a versão instalada.

<h3>4. Instalando o dependencias</h3>

No Console do Cmder ou no terminal da ferramenta de desenvolvimento escolhida, dentro da pasta do projeto digite o comando:
```bash
npm install
```

<h3>Configuração de variáveis de ambiente</h3>

*	Variáveis ficam localizadas no arquivo do caminho cypress/config/cypress.prod.json.
*	Quando adicionado novos ambientes, deve ser adicionado novo arquivo com seus valores, alterando apenas o que está depois de cypress.
*   Deve ser criado um novo script para usar o arquivo de configuração criado


<h4>Exemplo</h4>

| Nome do arquivo   |                                               Script de execução |
|:------------------|-----------------------------------------------------------------:|
| cypress.prod.json | "prod": "./node_modules/.bin/cypress open --env configFile=prod" |
| cypress.dev.json  |  "prod": "./node_modules/.bin/cypress open --env configFile=dev" |


Executando os testes automatizados
-----------------------------------

Para executar o testes automatizados usaremos alguns comandos a partir da pasta raiz do nosso projeto.

*	Para execução de todos os cenários implementados com o navegador chrome padrão utilizamos o seguinte código:
````bash
npm run run:prod
````
*	Para execução de cenários específicos com o navegador chrome padrão utilizamos o seguinte código:
````bash
npm run prod
````



Plugin que ajudam na criação de Testes
-----------------------------------

Entrar em Extensions ou Plugin da editor usado e buscar por:
````bash
TabNine
````




