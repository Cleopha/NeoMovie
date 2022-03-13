###               ###
# Build application #
###               ###
FROM node:17 as builder

WORKDIR /app

# Copy dependency manager
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install --prod

# Copy sources
COPY src src
COPY nest-cli.json .
COPY tsconfig.json .
COPY tsconfig.build.json .
COPY prisma prisma

# Buil application
RUN yarn build

###                ###
# Create application #
###                ###
FROM node:17 as application

# Retrieves sources
WORKDIR /app


COPY util/ util

# Get application build
COPY --from=builder /app/dist dist
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/prisma prisma
COPY --from=builder /app/package.json .

# Expose PORT
EXPOSE $API_PORT

# Declare entrypoint
ENTRYPOINT ["yarn"]
CMD ["start:prod"]
