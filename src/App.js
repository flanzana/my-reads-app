import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

//import BookItem from './components/BookItem'
import BookSearch from './components/BookSearch'
import BookShelf from './components/BookShelf'


class BooksApp extends React.Component {
  state = {
    //allBooks are all books that are displayed on shelves currently reading, want to read and read
    allBooks: [],

    listShelves: [ 
      {id: 1,
        nm: 'currentlyReading',
        name: 'Currently Reading'},
      {id: 2,
        nm: 'wantToRead',
        name: 'Want to Read'},
      {id: 3,
        nm: 'read',
        name: 'Read'}
    ]

  }

  //method getAll from BooksAPI: import all books from API server
  getAllBooks = () => {
    BooksAPI.getAll().then(books => (
      this.setState({allBooks: books})
    ))
  }

  // call from database serve
  // Ajax requests should only be made in the componentDidMount lifecycle method.
  // The render method should take in input via props, and return a description of your UI (JSX), nothing else.
  componentDidMount() {
    this.getAllBooks()
  }

  //method update from BooksAPI
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {/* Update the book shelf and application state */
      console.log(`Book "${book.title}" has been moved to shelf "${shelf}" (app.js).`)
    })
    //this.getAllBooks
  }

  render() {
    const { allBooks, listShelves } = this.state;
    
    console.log('number of allBooks on shelves is ' + allBooks.length)
    console.log(allBooks);

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {listShelves.map(shelf => {
                  return(
                    <BookShelf
                      key={shelf.id}
                      shelfNm={shelf.nm}
                      shelfName={shelf.name}
                      allBooks={allBooks}
                      updateShelf={this.updateShelf}
                    />
                  )
                })}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>

        <Route path="/search" render={() => (
          <BookSearch
            allBooks={allBooks}
            updateShelf={this.updateShelf}
          />
        )}/>

      </div>


    )
  }
}

export default BooksApp
