# Setup Vue project

1. Install Node.js and NPM

Before create a Vue project, we need to install Node.js (which includes npm — Node's package manager).

Download the latest version of Node.js.

After installation, verify that it was successful by running the following commands in your terminal/command prompt:
```
node -v //verify node version

npm -v //verify npm version
```

2. Install Vue CLI

Vue CLI is a command-line interface that helps you quickly set up a Vue project with all the necessary configurations and tools.
```
npm install -g @vue/cli

vue --version //verify the version
```

3. Create a New Vue Project

Now that Vue CLI is installed, you can create a new Vue project. In your terminal, navigate to the directory where you want to create your Vue project, then run:
```
vue create my-vue-project //Replace my-vue-project with your preferred project name
```

4. Navigate to Your Project Directory

Once the project setup is complete, navigate to the project directory:
```
cd my-vue-project
```

5. Start the Development Server

To see your Vue app running in the browser, start the development server by running:
```
npm run serve //After running this command, you should see output similar to this

 App running at:
- Local:   http://localhost:8080/
- Network: use `--host` to expose
Visit http://localhost:8080/ in your browser, and you should see the Vue.js welcome page!
```
