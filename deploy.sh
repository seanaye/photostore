#!/usr/bin/env sh

# abort on errors
set -e

# build
deno task wasmbuild

git init
git checkout -b deploy
git add -A
git commit -m "deploy"

git push -f git@github.com:seanaye/photostore deploy:deploy

