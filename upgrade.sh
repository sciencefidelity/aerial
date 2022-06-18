#!/bin/sh
# run `yarn remove` and `yarn add` for every dependency in package.json
npx yarn-upgrade-all
cd web
npx yarn-upgrade-all
..

