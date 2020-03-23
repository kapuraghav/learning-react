This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# React Learning

## Module System.

1. Any file or code that we write in these invidual files are not shared among each other. **They are little universe in themselves.**
2. For us to share we need to import these files into each other and files need to export the ( may be default ) functions/method/variables.

## JSX

1. class are written as className, so do the for property as forHtml or something
2. all the property values are put in using double quotes by convention.
3. can refer the JS variable with in {},
4. inline stlye can be used using {}, for example style = {{key:value, key: value}} where dashed keyName are camelCapitalized.

## Components

Components

1. Should adhere ReUsability, Nesting, Configuration
2. There are two kinds of components.
   1. class 2.function
3. Generally class components are well structured, better organized and you can
   keep the state in the component as well, lifecycle hooks and other goodies. functional Components as far as I understand are simple display components not much used for interactivity.

### Rules for class Component

    a) Always extend it with React.Component class
    b) Must have *render()* method.

### Rules of state System.

    a) Only usable with class based components , duh -- Techniacally we can use with state component, but makes it challenging.
    b) don't confuse it with prop system.
    c) JS Object containing data relevant to that component.
    d) updating state - instantly rerenders the component.
    e) talking of setting state - CAN ONLY BE UPDATED   via - `setStage()` method and must be initialized when component is created.
