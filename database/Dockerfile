FROM denoland/deno

WORKDIR /app

COPY . .

EXPOSE 8000

RUN deno cache src/main.ts

CMD ["run", "--allow-net", "--allow-env", "src/main.ts"]

