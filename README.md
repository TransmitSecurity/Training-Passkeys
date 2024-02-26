# Transmit Security Webinar - February 27th, 2024

This repository contains three branches:
- **main**: shows a full passkey integration, with autofill
- **adding-passkeys-starter** is the starting point of the webinar, a base code to learn how to implement passkeys in a project, with Transmit Security
- **adding-passkeys-solution** is the solution of the webinar, where passkeys are integrated (without autofill)

## Prerequistes

Software installed:
- git
- NodeJS 18.6+, with npm
- A Javascript IDE, we recommend [VSCode](https://code.visualstudio.com/)

## Getting started

Clone this repository, make sure to select the branch `adding-passkeys-starter`

```bash
git clone -b adding-passkeys-starter https://github.com/TransmitSecurity/Feb24Workshop.git
```

Install the project dependencies.
Make sure you have *NodeJS 18.6 or higher*.

```bash
npm install
```

Start the demo

```bash
npm run dev
```

Follow the webinar !
You also have the documentation in [./docs/add-passkeys.md](./docs/add-passkeys.md).

## Resources

You can use NVM to manage multiple versions of NodeJS
* [NVM for Windows](https://github.com/coreybutler/nvm-windows)
* [NVM on MacOS](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)