# GH Repositories Explorer

## Table of Contents

- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Storybook](#project-structure)
- [Sample Environment File](#sample-environment-file)
- [Code Scaffolding](#code-scaffolding)
- [Naming Convention](#naming-convention)

## Technologies

- Frontend :
  - [Next.js (React)](https://nextjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [ChakraUI](https://chakra-ui.com/)
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Backend :
  - [NodeJS](https://nodejs.org/)

## Getting Started

```bash
# Install dependencies for the host
yarn install

# Install git hooks
yarn prepare

# Start the application
yarn dev

# Unit testing
yarn test
```

## Project Structure

| Name                  | Description                                         |
| --------------------- | --------------------------------------------------- |
| /@types/\*            | Type definition of all the variables                |
| **src/components**/\* | All app wise common components                      |
| **src/hooks**/\*      | Custom react hooks                                  |
| **src/pages**/\*      | App pages                                           |
| **src/services**/\*   | API Services                                        |
| **src/styles**/\*     | Common/Global styles                                |
| **src/utils**/\*      | Utility functions                                   |
| .eslintrc.js          | Eslint configuration                                |
| .env.example          | Project environment variables                       |
| .gitignore            | Folder and files ignored by git.                    |
| .jest.config.js       | Jest configuration                                  |
| .jest.setup.js        | Jest setup                                          |
| next.config.js        | Next.js configuration                               |
| package.json          | NPM dependencies.                                   |
| tsconfig.json         | Contains typescript configuration for this project. |

## Sample Environment File

This project contains a `.env.example` file that you can use. Rename it to `.env` and modify the contents to your needs.

## Code Scaffolding

### Components ( if needed )

Check the `components` folder if you have neccessary components needed to finish your screen. If not, you can define the component in the screen itself or add any components here if you think it is reusable between screens.

1. Create a folder for the component in `src/components`. The name should be able to give others the idea what the component is about.
2. Create a root component file called `index.ts` under that folder. This file will define the component itself.
3. Create a folder called `@types` for the component's type definition
4. (Optional) You can also create a component within a component for complex components.

### Pages

The screen defines a collection of components. You can define some components here if you think it is only usable within the screen but preferrably components should be resuable. Any logic, API request, or retrieving from redux store should be defined here.

1. Create a folder under `src/pages`. Make sure the name is concise enough to understand what the component is about.
2. Create a root page file called `index.tsx`. This file will define the page itself.
3. Endpoints inside `src/pages/api` should also end with `.ts` extension.

## Naming Convention

### For variables, files and folders

Use `camelCase` for files and folders that are not components or pages and `camelCase` for variables within files. The only exception would be the component, pages, and type definition names which should be `PascalCase`.

```
// File name is Button.tsx

type ButtonProps = {

}

const Button: React.FC<ButtonProps> = () => {
  const propName = 'Sample'
  return <EditProfile name={propName} />;
};
```

In some cases, we include the file `functionality` in its file name in the format:

`<file-name>-<functionality>.<extension>`
`<file-name><functionality>.<extension>`

Non-component/screen file/folder naming example:

- auth.ts
- users.ts
- rootReducer.ts

Pages/component file/folder naming example:

- Layout
- Card
- Login
