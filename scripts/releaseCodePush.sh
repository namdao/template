#!/bin/sh
###
# Params 1: APP VERSION
# eg: 1.0.0; 1.0.1
# Params 2: MANDATORY OR NOT
# eg: yes 
###
APP_VERSION=$1
echo "#########DEPLOY CODEPUSH WITH VERSION ${APP_VERSION}#########"
if [[ $2 && $2 == "yes" ]]
then
    MANDATORY="--mandatory"
else
    MANDATORY=""
fi
appcenter codepush release-react -a hoangnam1121-gmail.com/toan-tam -d Staging -t ${APP_VERSION} $MANDATORY