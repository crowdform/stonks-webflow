# Stonks Webflow

Firebase hosting - https://stonks-351516.web.app

## Overview

A way of using modern JS tools with Webflow UI. Bundles JS into a single file to be import by Webflow and hosted externally on a Firebase CDN.

### Install

Manage site script https://webflow.com/dashboard/sites/stonks-app/code

`<script src="https://stonks-351516.web.app/legacy/app.js"></script>`

## Development via Proxy

1. Yarn install
2. Go to http://localhost:1234/webflow/exchange

Proxy requests from http://localhost:1234/webflow/_ -> https://stonks-app.webflow.io/_

## Deployment

1. Yarn build
2. Yarn deploy

## Hosted on Firebase

https://console.firebase.google.com/u/0/project/stonks-351516/overview
