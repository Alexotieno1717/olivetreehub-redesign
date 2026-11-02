FROM node:20-bookworm-slim AS deps

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json turbo.json ./
COPY apps/brand-website/package.json apps/brand-website/package.json
COPY packages/ui/package.json packages/ui/package.json
COPY packages/eslint-config-custom/package.json packages/eslint-config-custom/package.json
COPY packages/tailwind-config/package.json packages/tailwind-config/package.json
COPY packages/tsconfig/package.json packages/tsconfig/package.json

RUN npm install --no-audit --no-fund

FROM node:20-bookworm-slim AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build --workspace=brand-website

# Production image
FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3004
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/brand-website ./apps/brand-website

EXPOSE 3004

CMD ["node", "./node_modules/next/dist/bin/next", "start", "./apps/brand-website", "-p", "3004", "-H", "0.0.0.0"]
