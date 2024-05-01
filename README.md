# Backend test (result)

1. Перед запуском создать файл .env, где следует прописать:
   * SERVER_PORT - порт сервера
   * PG_PORT, PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE - порт, хост (адрес), пользователя, пароль, имя БД PostgreSQL
   * REDIS_DB_HOST, REDIS_DB_PORT, REDIS_DB_PASSWORD, REDIS_DB_INDEX - для подключения к Redis
2. Установить зависимости: npm i
3. Собрать проект (rкомпиляция ts): npm run build
4. (Прошу прощение за это) в папке build создать папку logs, а внутри logs папки errors и general
5. Запустить сервер: npm run start

Документация API доступна по ссылке: адрес_сервера_с_портом/docs

(Осторожно) правила линтеров не прописал
