# Backend test (result)

1. Перед запуском создать файл .env, где следует прописать:
   * SERVER_PORT - порт сервера
   * PG_PORT, PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE - порт, хост (адрес), пользователя, пароль, имя БД PostgreSQL
2. Собрать проект (rкомпиляция ts): npm run build
3. (Прошу прощение за это) в папке build создать папку logs, а внутри logs папки errors и general
4. Запустить сервер: npm run start

Документация API доступна по ссылке: адрес_сервера_с_портом/docs

(Осторожно) правила линтеров не прописал