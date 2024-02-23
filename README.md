# Transmit Security Webinar - February 27th, 2024

This repository contains three branches:
- **main**: shows a full passkey integration, with autofill
- **adding-passkeys-starter** is the starting point of the webinar, a base code to learn how to implement passkeys in a project, with Transmit Security
- **adding-passkeys-solution** is the solution of the webinar, where passkeys are integrated (without autofill)

## Getting started

Clone this repository, make sure to select the branch `adding-passkeys-starter`

```bash
git clone -b adding-passkeys-starter https://github.com/mluizinkTS/Feb24Workshop.git
```

Build the client lib

```bash
cd client-lib && npm run build
```

Install the project dependencies (the client lib is one them, this is why we built it).
Make sure you have NodeJS 18.6 or higher.

```bash
cd ..
npm install
```

Start the demo

```bash
npm run dev
```

Follow the webinar !
You also have the documentation in [./docs/add-passkeys.md](./docs/add-passkeys.md).