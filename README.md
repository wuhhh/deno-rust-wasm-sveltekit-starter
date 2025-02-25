# Deno+Rust+WASM+SvelteKit Starter Project (and Typescript!)

This is a starter project for building web apps using Deno, Rust, WASM and SvelteKit. This project was created to provide a simple starting point or reference for other developers who want to explore this stack.

## Tools & tech

- [Deno](https://deno.com): A secure runtime for JavaScript and TypeScript that uses V8 under the hood.
- [Rust](https://www.rust-lang.org/): A systems programming language that is known for its performance, safety, and concurrency features.
- [WASM](https://developer.mozilla.org/en-US/docs/WebAssembly) (WebAssembly): A binary instruction format that can run on the web and is used to build web applications.
- [Svelte](https://svelte.dev/)/[Kit](https://svelte.dev/docs/kit/introduction): A framework for building server-rendered Svelte applications with a small footprint.

## Prerequisites

To begin:

- Install Deno.
- Install Rust via Rustup.

After installation, ensure that `deno -V`, `rustup -V`, and `cargo -V` all work (as in, show some output and version numbers!)

## Setup

It's time to clone the repo and take a look at the code setup.

`git clone git@github.com:wuhhh/deno-rust-wasm-sveltekit-starter.git`

I set things up a little differently to most other examples I came across online, in that I have chosen to have the Rust source at the project root with the web project sitting inside this at `./www`.

With the repo cloned, `cd` in to the folder you just created and run the following commands:

```
deno task wasmbuild
(cd www && deno install)
```

The first deno task builds the WASM binary and corresponding js files for our front end, we then change directory into the `www` folder where our SvelteKit project lives and install dependencies.
Your root folder tree should now look like this (I haven't listed every file or folder for brevity):

```
├── lib/
│   ├── rs_lib.js
│   ├── rs_lib.wasm
├── rs_lib/
│   ├── src/
│   │   └── lib.rs
├── www/
│   ├── src/
│   │   │── routes/
│   │   │   ├── +layout.svelte
│   │   │   └── +page.svelte
│   │   └── app.html
│   ├── package.json
│   └── vite.config.ts
├── Cargo.toml
├── deno.json
└── mod.js
```

- **`lib/`** This is where your Rust code compiled for the web ends up - we import from this folder in Svelte
- **`rs_lib/`** Rust source code
- **`www/`** Our SvelteKit project that consumes the Rust WASM file

## Development

Alright let's get cooking - if you take a look inside the `deno.json` file in the root folder, you'll see a bunch of commands we can run, hopefully some of these should look pretty familiar, and in fact, all except the `wasmbuild` tasks are utility/helper wrappers around tasks from the `package.json` file in `www`.

For example, running `deno task www-dev` from the project root is identical to running `deno task dev` from inside the `www` folder. Run it now from the project root:

```
deno task www-dev
```

If all went well, you should have just spun up a dev server - if you visit the localhost address, you should hopefully see a page served by Svelte which confirms our WASM file is being imported and functioning correctly!

_If you saw an error about a missing tsconfig file, you can ignore it - it gets created on this initial build and the error will be gone the next time._

## Deno+Rust ✨

One of the magical things about this stack is you get native Typescript and WASM import support out of the box with Deno.

See that `mod.js` file in our project root? This was created when we ran `wasmbuild`. It's a js file we can run right in the terminal to test the functions we export from our Rust code. Just use `deno run mod.js` to see the output! This makes for a great developer experience when developing as you can quickly test output without leaving your terminal / IDE.

## Build & Deploy

Since we are only using `deno` to make local development a bit (a lot?!) nicer, building and deploying should be no different than a regular SvelteKit site. To test a build locally you can run

`deno task www-build && deno task www-preview`

Refer to the [SvelteKit docs](https://svelte.dev/docs/kit/building-your-app) on building to learn how to take your bundled and optimised files to production.

## Further Reading

- Deno: [Deno documentation](https://docs.deno.com/)
- wasmbuild: [denoland/wasmbuild](https://github.com/denoland/wasmbuild)
- Rust: [Rust documentation](https://doc.rust-lang.org/book/)
- MDN WASM (WebAssembly): [WASM documentation](https://developer.mozilla.org/en-US/docs/WebAssembly)
- SvelteKit: [SvelteKit documentation](https://kit.svelte.dev/docs)
