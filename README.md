# TemperMonkey-Project

Project Template for TemperMonkey Development.

# Usage

```
$ git clone https://github.com/lanbin/TemperMonkey-Project.git
$ npm install
$ npm run serve

> Project is running at http://localhost:9981/
```

After this, copy the serve url: **http://localhost:9981/**

## Configuration of TemperMonkey Plugin

1. Create a New script
2. Add this configurations

```
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @require      http://localhost:9981/dist/index.js
// @grant        none
// ==/UserScript==

```

This script likes a shell to require file which is developing.
When you changed the file, the compiling will be automatically processed.
Refresh the matched page **2 or 3 times**, then you can see the changes.

> If you used the **require** or **grant** tags in index.js
> **that you must add the same tag to the configuration above.**

## Deployment

1. Change the version tag of the index.js
2. Build it

```
$ npm run build
```

3. Put the file wherever remote server.

## Webpack configuration

The Default webpack config is support signle entry.
Update the entry array to make it support multiple entry.

This project also can support Vue.js.
