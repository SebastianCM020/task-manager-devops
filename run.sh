#!/bin/bash
ENVIRONMENT=$1
if [ -z "$ENVIRONMENT" ]; then
  ENVIRONMENT="dev"
fi

echo "Iniciando aplicación en ambiente: $ENVIRONMENT"
export NODE_ENV=$ENVIRONMENT

if [ "$ENVIRONMENT" == "test" ]; then
  npm test
else
  node server.js
fi