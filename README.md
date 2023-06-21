# INTRODUCTION
This is an app is a single page application created using create-react-app.  It's called Hunger Smash.  To view and interact with this app, please clone the following repo to your local environment:

https://github.com/PhoenixMomof2/hunger-smash.git

## Deployment Goals

WELCOME This application displays some of my favorite meals and treats.  Sometimes you just need a suggestion to stimulate those taste buds and smash that feeling of hunger.  The Hunger Smash app has you covered!

In your terminal run the following command within the repo directory:  npm start as well as npm run server 

Home
  http://localhost:3001

Routes:
  http://localhost:3001/about
  http://localhost:3001/foods
  http://localhost:3001/newFoods

## Frontend Setup
### `npm start`

Use create-react-app to generate starter code for your project. Follow the instructions on the create-react-app site to get started.

## Backend Setup 
### json-server --port 3001 --watch db.json
You can use this json-server template to generate your backend code. Using this template will make it easier to deploy your backend later on.

If you prefer, instead of using the template, you can create a db.json file in the root of your project with a structure that looks like this:

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

For stretch deliverables, I would like to display the food items in tiled or grid format where 3 cards are displayed per row.  I would also like to give the user the ability to update or delete the meal cards.  Further, I may create a table to filter the meals by category.

GET /foods
POST /newFoods
GET /foods/:id
PATCH /foods/:id
DELETE /foods/:id

## Blog on using props in React
https://dev.to/phoenixmomof2/creating-passing-props-4bpf

  


