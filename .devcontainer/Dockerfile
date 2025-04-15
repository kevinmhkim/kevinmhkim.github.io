FROM --platform=linux/arm64 mcr.microsoft.com/devcontainers/typescript-node:22-bullseye

USER node

# Set home directories
ENV HOMEDIR /workspaces/kevinmhkim.github.io

RUN npm install -g --force corepack@0.31.0
RUN corepack enable && corepack prepare pnpm@10.1.0 --activate

RUN pnpm config set store-dir ~/pnpm
ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PATH:$PNPM_HOME"
ENV GPG_TTY=$(tty)
RUN pnpm install turbo --global

ENV SHELL /bin/zsh
