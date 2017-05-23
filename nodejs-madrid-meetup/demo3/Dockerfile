FROM ubuntu:16.04
MAINTAINER Gruntwork <info@gruntwork.io>

ARG aws_access_key_id
ARG aws_secret_key

ENV AWS_ACCESS_KEY_ID $aws_access_key_id
ENV AWS_SECRET_ACCESS_KEY $aws_secret_key

# Install Node.js
RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y nodejs npm curl ca-certificates jq

# Source code should be in the /usr/src/app folder
RUN mkdir -p /usr/src/app

# Copy everything into the docker image
COPY . /usr/src/app

# Set the directory in which the code has just been copied as working directory
WORKDIR /usr/src/app

# Solve node command not found http://askubuntu.com/questions/404929/node-command-not-found
RUN ln -s /usr/bin/nodejs /usr/bin/node

# Run the Node.js app by default
EXPOSE 3000

# "Your Dockerfile CMD can use that environment variables
# http://stackoverflow.com/questions/40873165/use-docker-run-command-to-pass-arguments-to-cmd-in-dockerfile
CMD ["sh", "-c", "bin/run.sh"]
