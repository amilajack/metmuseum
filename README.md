metmuseum.js
============

A Node API for the [metmuseum API](https://metmuseum.github.io)

## Installation

```bash
npm install metmuseum
```

## Local Setup

```bash
git clone https://github.com/amilajack/metmuseum
cd metmuseum
yarn
yarn test
```

## Usage

```js
import Metmuseum from 'metmuseum';

Metmuseum.getAllItems();
Metmuseum.getItem(436535);
Metmuseum.getDepartments();
Metmuseum.search('starry night');
```
