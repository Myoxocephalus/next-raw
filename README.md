# Next.js + raw files

Import files as string in [Next.js](https://github.com/zeit/next.js)

## Installation

```
npm install --save next-raw
```

or

```
yarn add next-raw
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withRaw = require('next-raw')
module.exports = withRaw()
```

In your component

```js
import txt from './my-file.txt'

export default () => <div>
  <p>{txt}</p>
</div>
```