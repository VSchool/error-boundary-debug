This is a debugging exercise to help you understand \<ErrorBoundary>'s in react and where to use them.

Open your terminal and then CD into your assignments folder.  Then run the following command to clone, remove .git, install dependencies, and open in VSCode.

`git clone git@github.com:VSchool/error-boundary-debug.git && cd error-boundary-debug && rm -rf .git && npm i && code .`

At first only the Home page will load.  Your task is to:
  1. Create an ErrorBoundary component
  2. Place ErrorBoundary components where needed so that the application still allows the user to go around the website regardless of the thrown errors.