FROM node:12

ARG HTTP_PORT

RUN apt-get -y update \
	&& apt-get install -y git

RUN yarn global add @vue/cli -g

WORKDIR /app

RUN apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

EXPOSE ${HTTP_PORT}

USER node

# switch to npm if you chose it as package manager
CMD ["yarn", "serve"]
