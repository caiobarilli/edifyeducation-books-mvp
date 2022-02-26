# Books MVP - Edify Education

Exercício Take-Home para candidatos a SDE (Edify Tech)

<br />

| Software       | Port |
| -------------- | ---- |
| **laravel**    | 80   |
| **mysql**      | 3306 |
| **reactjs**    | 3000 |

<br />

## Pré-requisitos

Para começar, certifique-se de ter o [Docker](https://docs.docker.com/) e também o [Docker Compose](https://docs.docker.com/compose/install/) no seu sistema.

<br />

## Download

Faça o download do projeto com o comando:

```sh
git clone git@github.com:caiobarilli/edifyeducation-books-mvp.git
```

<br />

## Instalação

Para iniciar a instalação faça uma copia do arquivo ``.env.example`` para ``.env``

```sh
cp .env.example .env
```

Será necessario adicionar uma chave de api fornecida pelo google no arquivo ``.env``

```sh
MIX_GOOGLE_API_KEY="SUA_CHAVE_GOOGLE_API"
```

Faça download das imagens e construa os containers com o comando:

```sh
docker-compose build
```

Para iniciar digite o comando:

```sh
docker-compose up -d
```

Acesse o container com o comando

```
docker exec -it edifyeducation-books-mvp-laravel.test-1 /bin/bash
```

Instale as dependencias do composer

```sh
composer install
```

Para gerar a chave da aplicação digite dentro do container

```sh
php artisan key:generate
```

Para criar o link simbólico da pasta storage utilize o comando Artisan:

```sh
php artisan storage:link
```

Certificar-se de que o diretório é gravável permita que www-data grave na pasta.

```sh
chown -R 1000:1000 /var/www/html/
```

Atribua a permissão 755 a pasta storage.

```sh
chmod -R 755 /var/www/html/storage/
```

Faça a migração do banco com o comando:

```sh
php artisan migrate --seed
```

Saia do container.

```
exit
```

Pare os containers.

```sh
docker-compose down
```

Tudo pronto! agora para iniciar digite o comando:

```sh
docker-compose up -d
```

acesse seu [navegador](http://localhost/) para vizualizar o projeto.

<br>

## Testes

Acesse o container

```
docker exec -it edifyeducation-books-mvp-laravel.test-1 /bin/bash
```

Digite o comando

```
php artisan test
```

<br>


## Desenvolvimento Frontend


Instale as dependencias com o comando:

```sh
npm install
```

Para iniciar o desenvolvimento digite:

```sh
npm run dev
```
