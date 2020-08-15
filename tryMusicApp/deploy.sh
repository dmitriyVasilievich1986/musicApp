# build our heroku-ready local Docker image
docker build -t musicapp -f Dockerfile .


# push your directory container for the web process to heroku
heroku container:push web -a project-music-app


# promote the web process with your container 
heroku container:release web -a project-music-app


# run migrations
heroku run python3 manage.py migrate -a project-music-app