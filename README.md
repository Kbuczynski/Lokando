# LMS

## Wymagania
 * git
 * composer
 * node.js
 * npm
 * php
 * mysql
 * php.ini dostępny [Tutaj](https://0bin.net/paste/-CX5bR7t#OVVXAh1x-WJzlcLyRDpyZs27G30WwVq+gNQCcJiANhk)
 
### Instalacja
Pierwszym krokiem jest wrzucenie konfiguracji php.ini do swojego serwera php
Potem:
```batch
\user> cp .env.example .env
\user> cp webpack.mix.js.example webpack.mix.js.example
\user> mkdir assets ./resources
\user> composer update
\user> npm install
```

Następnie ustaw odpowiednio .env (Dane do bazy danych i APP_URL(ścieżka do katalogu aplikacji) wystarczy)

Następnie: 
```batch
\user> php artisan key:generate
\user> php artisan migrate:fresh --seed
```

### Development
Przebudowa całej bazy lokalnie:
```batch
\user> php artisan migrate:fresh --seed
```

Odpalenie środowiska developerskiego
```batch
\user> npm run watch
```

#### Przydatne pierdoły
Jeżeli pokazuje ci jakichś brak plików (najczęsciej php) to
```batch
\user> composer dump-autoload
```

Jeżeli jakimś cudem nie zbudowałem dokumentacji to
``` batch
\user> php artisan apidoc:generate
```

Jeżeli Passport coś się pluje to
```batch
\user> php artisan passport:install
\user> php artisan passport:client --personal
```

Jeżeli coś sie popsuje to do mnie wiadomo

#### Chcemy te 30K !!!
