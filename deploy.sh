#!/usr/bin/env sh

# abort on errors
set -e

# build
deno task wasmbuild

git branch -d deploy
git checkout -b deploy
git add -A
git commit -m "deploy"
git checkout -

git push -f git@github.com:seanaye/photostore deploy:deploy

