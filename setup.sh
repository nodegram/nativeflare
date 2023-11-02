#!/bin/bash

# Usage:
# ./setup.sh [prod]
# This script creates a .env file in ./apps/docs used by the Docusaurus app to determine the URL for the Expo preview.

# Check if the correct number of arguments is provided
if [ "$#" -gt 1 ]; then
  echo "Usage: $0 [prod]"
  exit 1
fi

# Check if the .env file already exists
if [ -f ./apps/docs/.env ]; then
  echo "Error: .env file already exists in ./apps/docs"
  exit 1
fi

# Determine the Expo preview URL based on the argument provided
if [ "$1" == "prod" ]; then
  EXPO_PREVIEW_URL="https://expo-demo.nativeflare.dev"
else
  EXPO_PREVIEW_URL="http://localhost:8081"
fi

# Create the .env file with the appropriate Expo preview URL
echo "EXPO_PREVIEW_URL=\"$EXPO_PREVIEW_URL\"" > ./apps/docs/.env

# Display a success message
echo "The .env file with Expo preview URL has been created in ./apps/docs"
