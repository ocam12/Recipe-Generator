# Recipe-Generator

The Recipe Generator was built as a team of 3 in two days to experiment with the [spoonacular API](https://spoonacular.com/food-api) and React.

The project aims to accept a selection of ingredients and some preferences to output a short list of recipes that can be made.

## Running the Recipe-Generator

### API Key

#### spoonacular API

Click [here](https://spoonacular.com/food-api/console#Dashboard) and sign-up to create a spoonacular API account. This is free and enables 50 requests per day.

Once signing up, log in, choose the 'Profile & API Key' tab, press 'Show / Hide API Key' and then copy this key.

#### .ENV File

Create a .ENV file by renaming .env.example.

In the .ENV file you should add the key found in the space provided.

```
REACT_APP_SPOON_KEY=__ENTER_YOUR_KEY_HERE__
```

### Run npm install

To make sure that you have installed the dependencies for this project enter the following command in the base folder of this project:

```
npm install
```

### Starting the server

The recipe generator can be ran in development mode or in production mode.
For the purpose of this README, development mode will be fine.

```
npm start
```

If you need to create the built version:

```
npm run build
```

## What Next?

The [spoonacular API](https://spoonacular.com/food-api) provides a lot more information in it's responses and further endpoints for other features as well.
