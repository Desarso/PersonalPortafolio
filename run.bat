@REM a bat file thats install mysql for nextjs app and runs it


echo Installing MySQL Client
docker run -d ^
    -p 33060:3306 ^
    --name mysql-client ^
    --link mysql:mysql ^
    -e MYSQL_ROOT_PASSWORD=!MYSQL_ROOT_PASSWORD! ^
    -e MYSQL_DATABASE=!MYSQL_DATABASE! ^
    -e MYSQL_USER=!MYSQL_USER! ^
    -e MYSQL_PASSWORD=!MYSQL_PASSWORD! ^
    mysql:latest