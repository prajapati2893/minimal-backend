This project is a sample minimal backend application which exposes an api for employee list.
Uses sequelize orm

Steps to run:

npm install <br>
start your sql server<br>
npx sequelize-cli db:create<br>
npx sequelize-cli db:migrate<br>
npx sequelize-cli db:seed:all<br>
npm start<br>

docker build \
 --build-arg APP_PORT=4000 \
 --build-arg DATABASE_HOST=localhost \
 --build-arg DATABASE_PORT=3306 \
 --build-arg DATABASE_USERNAME={username} \
 --build-arg DATABASE_PASSWORD={password} \
 --build-arg DATABASE_NAME=TEST_DB \
 --build-arg NODE_ENV=development \
 -t minimal-backend .
