# `felux-devtest`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A standalone quote comparator table and associated KPI calculations in React. 

## Code Structure

All React parts are housed in the `QuoteAnalyzer` folder under `components`. Some helper functions were split
off into `lib/helpers.js` for organization. In theory (as architected), the `QuoteAnalyzer` can be implemented on a page, and
just needs data passed to it as props. It is assumed the props data is structurally the same as the 
`lib/data.json` sample data. Also, there is a 1 second delay on render to simulate loading data from
a backend. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.