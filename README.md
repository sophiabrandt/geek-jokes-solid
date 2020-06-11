[![MIT License][license-shield]][license-url]

# geek-jokes-solid

The repository shows my first attempt at [fetching data][geekjokes] with the **[solidJS][solidjs]** UI library.

> Solid is a declarative Javascript library for creating user interfaces. It does not use a Virtual DOM. Instead it opts to compile its templates down to real DOM nodes and wrap updates in fine grained reactions. This way when your state updates only the code that depends on it runs.

This project was bootstrapped with [Create Solid](https://github.com/ryansolid/create-solid).

## Installation

You'll need Node.js. Clone the repository and install dependencies:

```bash
git clone git@github.com:sophiabrandt/geek-jokes-solid.git
cd geek-jokes-solid
npm install
```

## Usage

```bash
npm run start
```

## Deno

_Optional:_

If you want, you can serve your build file with [Deno](https://deno.land).

1. [Install Deno](https://deno.land/#installation)

2. Create a build for the Solid app

```bash
npm run build
```

3. Load Deno dependencies

```bash
deno cache --reload --lock=lock.json deps.ts
```

4. Start Deno and serve Solid as static files

```bash
deno run -A main.ts server
```

The app runs on `http://localhost:8080`.

## License

Copyright © 2020 Sophia Brandt  
[MIT Licence](LICENSE)

## Credits

- [Sameer Kumar](https://sameerkumar.website/)
- [Ryan Carniato](https://github.com/ryansolid)

[license-shield]: https://img.shields.io/badge/License-MIT-green.svg?style=flat-square
[license-url]: https://github.com/sophiabrandt/geek-jokes-solid/blob/master/LICENSE
[solidjs]: https://github.com/ryansolid/solid
[geekjokes]: https://github.com/sameerkumar18/geek-joke-api
