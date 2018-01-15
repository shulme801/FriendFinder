# #Heroku/Quick HowTo
## Quick reminder of the commands needed to deploy a node app to Heroku. 
### Assumptions 
* The Heroku cli tool is already installed and accessible from the command line.  Validate with the command “node -v”.
* The tools node and npm are installed and accessible from the command line. Validate with the command “npm -v”. 
* You have the git tool installed. Validate with the command “git —version”.
* You already have a GitHub repo into which you’ve committed the code for your app.
* When you create an app with “heroku create”, a “git remote” called “heroku” is created and associated with your local git repository.
* The “heroku create” command will also generate a random name by which your app will be known. I find it’s better to pass to heroku my own preferred name.  The name can only contain lower case letters, numbers, and the dash. In this example, I’ve used the name “ff-shulme801”. 

### Commands
* $  heroku login
     — username and password prompts
* $ heroku create ff-shulme801
* $ git push heroku master
* $ heroku ps:scale web=1
* $ heroku open

### Results
* Code repo is deployed onto heroku.
* App called “ff-shulme801” is deployed onto heroku.
* The heroku ps:scale web=1 command ensures that at least one instance of the app is running.
* App is accessible at [FriendFinder](https://ff-shulme801.herokuapp.com/).

### Credits
* See the “node.js” tutorial at [Getting Started on Heroku with Node.js | Heroku Dev Center](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
