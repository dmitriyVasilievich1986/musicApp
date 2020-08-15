# build our heroku-ready local Docker image
docker build -t musicAPP -f Dockerfile .


# push your directory container for the web process to heroku
heroku container:push web -a aaa-project-music-app


# promote the web process with your container 
heroku container:release web -a aaa-project-music-app


# run migrations
heroku run python3 manage.py migrate -a aaa-project-music-app