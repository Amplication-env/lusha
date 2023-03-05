# use the nodejs builder image
FROM    hub.lusha.co/lusha/nodejs-builder:18 as builder
# install dev dependencies also
RUN     npm i
RUN     npm run build

# use the backend base to add to artifacts
FROM    hub.lusha.co/lusha/nodejs-backend-base:18
COPY    --from=builder --chown=node:node /usr/src/app .

# the app has non default port 3030
ENV     PORT=3030

CMD     npm run start:$APP_ENV
Y --from=base /app/scripts ./scripts
COPY --from=base /app/src ./src
COPY --from=base /app/tsconfig* ./

EXPOSE 3000

CMD [ "node", "./dist/main"]
