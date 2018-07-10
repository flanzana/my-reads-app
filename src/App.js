import React from 'react'
//import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

//import BookItem from './components/BookItem'
import BookSearch from './components/BookSearch'
import BookShelf from './components/BookShelf'


class BooksApp extends React.Component {
  state = {
    screen: 'list',

    allBooks: [],

    listShelves: [ 
      {id: 1,
        name: 'Currently Reading'},
      {id: 2,
        name: 'Want to Read'},
      {id: 3,
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

  updateShelf(book, shelf) {
    BooksAPI.update(book, shelf)
  }


  render() {
    const { screen, allBooks, listShelves } = this.state;

    return (
      <div className="app">
        {screen === 'list' && (
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
                      shelfName={shelf.name}
                      allBooks={allBooks}
                      updateShelf={this.updateShelf}
                    />
                  )
                })}
              </div>
            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ screen: 'search' })}>Add a book</a>
            </div>
          </div>
        )}

        {screen === 'search' && (
          <BookSearch
            allBooks={allBooks}
            updateShelf={this.updateShelf}
          />
        )}
      </div>


    )
  }
}

export default BooksApp
