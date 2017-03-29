#!/usr/bin/env bash

if [ -d "node_modules" ] || [ -d "build" ]; then
  echo "Removing existing files..."
  rm -rv node_modules build --force
fi

echo "Creating file directories..." && \
mkdir build && \
mkdir build/static && \

printf "\nInstalling packages...\n" && \
yarn install && \

printf "\nBuilding in progress...\nPlease wait...\n\n" && \
npm run -s babel:build && \

# printf "\nRunning preliminary tests...\n" && \
# npm -s test && \

printf "All done...\n"
