#!/usr/bin/env sh

# abort on errors
set -e

# build
deno task wasmbuild
deployctl deploy --project seanaye-portfolio-deploy \
  --exclude=prisma \
  --exclude=target \
  --exclude=rs_lib \
  --dry-run \
  ./main.ts


