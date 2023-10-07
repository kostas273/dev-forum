This is a [Next.js](https://nextjs.org/) project template to be used as a reference for future projects.

## Getting Started

This project uses [ESLint](https://eslint.org/) to enforce coding standards, ensuring that developers adhere to best practices and avoid common pitfalls. It also uses [Prettier](https://prettier.io/) ensure consistent code style.

### Install Editor Extensions

- **ESLint**: Installing the ESLint [extension](vscode:extension/dbaeumer.vscode-eslint) for your code editor provides real-time feedback and highlighting of potential issues and errors in your code.

- **Prettier**: Installing the Prettier [extension](vscode:extension/dbaeumer.vscode-eslint) for your code editor will enable automatic code formatting on save, ensuring that your code always adheres to prettier coding style guidelines.</br>
  <sub>
  **NOTE**: A [config file](.vscode/settings.json) is included to set prettier as default formatter to the current project. No need to enable it globally.
  </sub>

- **Code Spell Checker (Optional)**: Consider adding Code Spell Checker [extension](vscode:extension/streetsidesoftware.code-spell-checker) to your editor to catch spelling and typographical errors in code.

### Install Dependencies

To install the dependencies run:

```bash
npm install
```

**Important**: After dependencies are installed, restart your editor for the extensions to work properly.

### Running the application

Run the development server on [localhost:3000](http://localhost:3000):

```bash
npm run dev
```
Run the unit test:
```bash
npm run test
```
Format the code to prettier code style:
```bash
npm run format
```
Find linting errors:
```bash
npm run lint
```
Fix the fixable by the cli linting issues:
```bash
npm run lint:fix
```
