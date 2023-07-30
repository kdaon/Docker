# Sobre

Trabalho Prático da disciplina de Sistemas Distribuídos da Universidade Federal de Lavras (UFLA), lecionada pelo professor André de Lima Salgado.

O objetivo deste trabalho é apresentar o Docker, uma tecnologia de virtualização por containêres, e demonstrar sua funcionalidade por meio de uma aplicação prática. 

Ao final do projeto, esperamos que seja possível ter uma compreensão sólida do Docker, seus benefícios e a forma como facilita o desenvolvimento, implantação e execução de aplicações distribuídas.

Dessa forma, criamos uma aplicação que *[descrição breve da aplicação]*.

> Motivação:

> Material de Apoio: _link pro slide_


# API
*[descrição detalhada da API]* 

*com imagem (opcional)*


# Visão Arquitetônica do Sistema
*[diagrama]*


# Tecnologias

![DOCKER](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![NODE](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MYSQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)


# Instalacao
- MYSQL
  
Construir a imagem do mysql docker, para isso vamos executar o seguinte comando na pasta raiz do projeto
> -t : usado para dar tag/nome para a imagem | -f : caminho do dockerfile e o '.' é porque queremos buildar na pasta em que estamos, no caso a raiz
```
build -t mysql-image -f api/db/Dockerfile . 
```
  
Executar o container com persistencia de dados
```
docker run -d -v $(pwd)/api/db/data:/var/lib/mysql -rm --name mysql-container mysql-image
```

Adicionar um IP para o container contendo o mysql   
 ```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql-container
```
    
[opcional] Executar comandos no container para checar o bando de dados
```
docker exec -it mysql-container /bin/bash
```

Executar o script sql
```
docker exec -i mysql-container mysql -uroot -p1234 < api/db/script.sql
```
</br>


- NODE

Para preparar o ambiente de instalação:
- Instale o [Node.js](https://nodejs.org/en/), na versão 12 em seu computador.

Dentro da pasta ap
```
- npm init
```

Instalar nodemon para dar reload automático toda vez que atualizarmos os arquivos JavaScript
```
npm install --save-dev nodemon
```

Instalar o express para criar a api e o driver do mysql
```
npm install --save express mysql
```

> + criar o comando "start": "nodemon ./src/index" no package.json

Rodar o dockerfile do node (na pasta raiz do projeto) 
> Observação: pode ser nescessário rodar como superusuário
```
docker build -t node-image -f api/DockerfileNode .
```

Rodar um container com a imagem
> '-p' serve para conectar a porta 9001 do container com a porta 9001 da nossa maquina, para que o node possa receber requisições
```
docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --rm --name node-container node-image
```

Por fim, só acessar o endereço: **http://localhost:9001/products**


# Referências Utilizadas
Vídeo utilizado para apoio do código: https://www.youtube.com/watch?v=Kzcz-EVKBEQ&t=219s

ChatGPT utilizado para resolver bugs relacionados ao código: https://chat.openai.com

Documentação do Docker: https://docs.docker.com/get-started/

Site de apoio: https://www.hostinger.com.br/tutoriais/o-que-e-docker


# Autores
<table style="width: 100%;">
  <tr>
    <td style="text-align: center;"><a href="https://github.com/Eduardo-Cezar">Eduardo Cezar</a></td>
    <td style="text-align: center;"><a href="https://github.com/ingridfalchii">Ingrid de Falchi</a></td>
    <td style="text-align: center;"><a href="https://github.com/LeoJunioYuri">Leonardo Basso</a></td>
    <td style="text-align: center;"><a href="https://github.com/kdaon">Olivia Campos</a></td>
  </tr>
</table>
