# MyReads Project

## Introduction
Project MyRead is my first project after learning React at nanodegree Front-End Web Developer at Udacity. Udacity provided us a static example of the CSS and HTML markup, but without any of the React code that is needed to complete the project. Our job was to add interactivity to the app by refactoring the static code in this template.


## How to install and use the project
- Clone or download [project MyReads](https://github.com/flanzana/my-reads-app).
- Install all project dependencies with `npm install`.
- Start the development server with `npm start`.
- Open [localhost:3000](localhost:3000) in your browser (Google Chrome is recommended).
- You can move books between three shelves: *Currently Reading*, *Wants to Read* and *Read*.
- You can remove book from shelf by choosing shelf *None*.
- On the search page, you can search for other books from the server and move books to selected shelf.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Something about backend server
Udacity has provided a backend server for us. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods we needed to perform necessary operations on the backend:

- `getAll`
- `update`
- `search`

More info about each method can be found on [Udacity's project page on GitHub](https://github.com/udacity/reactnd-project-myreads-starter).


## Sources
- Starter code from [Udacity's project page on GitHub](https://github.com/udacity/reactnd-project-myreads-starter)
- Udacity's lessons of React
- The select tag on forms from [React Docs](https://reactjs.org/docs/forms.html#the-select-tag)
- Comparison of two arrays using JavaScript from [codeburst.io](https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe)