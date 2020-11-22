# Lokando

Lokando is a web application that helps smaller buisnesses survive COVID-19 world wide crysis. 

## About

Lokando is made with:
* [Laravel](https://laravel.com/)
* [ReactJS](https://reactjs.org)
* [MariaDB](https://mariadb.org/)

We're using Laravel to render React as frontend, and we're providing REST API with it.  
Everything UI/UX wise was designed by us.


## Usage

You can experience our application by clicking [Lokando - dev](http://dev.lokando.pl)  

You can create user by yourself or use one of provided by us:
```batch
login: lokando@lokando.pl
pass: tonieadmin

login: firma@firma.pl
pass: firma123

login: osoba@osoba.pl
pass: osoba123

login: czlowiek@czlowiek.pl
pass: czlowiek123
```
:okando and firma account belongs to category "Gastronomia" and product are only there for now

## Local Installation

### Prerequirements
 * git
 * composer
 * node.js
 * npm
 * php
 * mysql
 * php.ini dostępny [Tutaj](https://0bin.net/paste/-CX5bR7t#OVVXAh1x-WJzlcLyRDpyZs27G30WwVq+gNQCcJiANhk)
 * web server

###
 1. Enable modules listed in our php.ini in yours php config file
 2. Copy/Make files
```batch
\user> cp .env.example .env
\user> cp webpack.mix.js.example webpack.mix.js
\user> mkdir assets ./resources
```
3. Install dependiences
```batch
\user> composer update
\user> npm install
```

4. Update your .env
```batch
APP_NAME=NAME_OF_YOUR_APP
APP_ENV=LOCAL_OR_PRODUCTION
APP_KEY=
APP_DEBUG=TRUE_OR_FALSE
APP_URL=APPLICATION_URL example: http://dev.lokando.pl

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=DATABASE_NAME
DB_USERNAME=DATABASE_USER
DB_PASSWORD=DATABASE_PASSWORD
```

5. Sign your app
```batch
\user> php artisan key:generate
```

6. Zbuduj base danych  
Bez seedera
```batch
\user> php artisan migrate:fresh
```
With seeder (random strings as data)
```batch
\user> php artisan migrate:fresh --seed
```
```batch
\user> php passport:install
```

7. Zbuduj frontend
```batch
\user> npm run dev
```

## Authors

* [Angelika Iskra](https://github.com/angelikaiskra) Frontend
* [Kamil Buczyński](https://github.com/Kbuczynski) Frontend
* [Adam Hallmann](https://github.com/Sagiys) Backend
