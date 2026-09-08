# SEETO COMMUNICATION LIMITED

Company website for [SEETO](https://seeto.app) — a Nairobi technology company building Rayso, MaalOS, Fetchflat, Seeto Exchange and Seeto Systems, with volunteer work on Turaath and Thahabi.

## Stack

TanStack Start, React, Tailwind CSS, Vite.

## Develop

```bash
npm install
npm run dev
```

## Production (Docker)

```bash
docker compose up --build
```

The image listens on port 8080. Map it as needed (`-p 80:8080`).

```bash
docker build -t seeto .
docker run --rm -p 8080:8080 seeto
```

No database is required.

## Production (Node)

```bash
npm install
NITRO_PRESET=node-server npm run build
node .output/server/index.mjs
```
