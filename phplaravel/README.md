# SPIRE: Laravel API + Next.js

Plantshop, hvor frontenden (Next.js) henter produkter fra et Laravel REST API med en MySQL-database.

- `php_api/`: Laravel API
- `Plantshop-part-2-main/`: Next.js frontend

## Krav
- PHP 8.2+ og Composer
- MySQL (fx via XAMPP)
- Node.js 20+

## 1. Start API'et
1. Start MySQL i XAMPP, og opret en database, der hedder `plantshop`.
2. Kør i `php_api`:
   ```bash
   composer install
   cp .env.example .env
   php artisan key:generate
   ```
3. Ret databasen i `.env`:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=plantshop
   DB_USERNAME=root
   DB_PASSWORD=
   ```
4. Opret tabellerne, og indsæt de 13 planter:
   ```bash
   php artisan migrate:fresh --seed
   php artisan serve
   ```
   API'et kører nu på http://127.0.0.1:8000/api

## 2. Start frontenden
1. Opret `.env.local` i `Plantshop-part-2-main`:
   ```env
   LARAVEL_API_URL=http://127.0.0.1:8000/api
   ```
2. Kør:
   ```bash
   npm install
   npm run dev
   ```
3. Åbn http://localhost:3000

## REST-stier
Send headeren `Accept: application/json`.

| Metode | Sti | Beskrivelse | Svar |
|---|---|---|---|
| GET | `/api/products` | Alle produkter | 200 |
| GET | `/api/products/{id}` | Ét produkt | 200 / 404 |
| POST | `/api/products` | Opret produkt | 201 / 422 |
| PUT | `/api/products/{id}` | Opdater produkt | 200 / 404 / 422 |
| DELETE | `/api/products/{id}` | Slet produkt | 200 / 404 |

**Påkrævede felter ved POST/PUT:** `name`, `price` (heltal ≥ 0) og `image`.
**Valgfrie felter:** `description`, `origin`, `light`, `water`, `note` og `trefle_id`.
