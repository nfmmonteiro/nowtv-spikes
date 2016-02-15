#!/bin/bash

if [ "$1" == "" ]; then
  echo '[error] Please specify a directory name!'
  exit 1
fi

echo "Verifying access to files under $1"

files=( "dist.js" "identity-config-single.json" "identity-config.json" "monitoring.json" "screen.css" "wallet-config-creation-single.json" "wallet-config-creation.json" "wallet-config-purchase-single.json" "wallet-config-purchase.json" )

for key in ${files[@]}; do

   url="https://signup.nowtv.com/app/dist/$1/$key"
   echo "[info] $url "

   wget -S -q --tries=1 --timeout=1 --spider "$url"
   echo "$?"

   #if [[ $? -eq 0 ]]; then
   #   echo "[info] OK"
   #else
   #   echo "[error] FAILED"
   #fi
done

