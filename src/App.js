import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import BookItem from './components/BookItem'
import BookSearch from './components/BookSearch'
import BookShelf from './components/BookShelf'


class BooksApp extends React.Component {
  state = {
    //showSearchPage: false,
    screen: 'list',
    allBooks: [],
    listShelves: ['Currently Reading', 'Want to Read', 'Read']

  }

  //method getAll from BooksAPI: import all books from API server
  getAllBooks = () => {
    BooksAPI.getAll().then(books => (
      this.setState({allBooks: books}),
      console.log('allBooks in getallbooks:'),
      console.log(books)
    ))
  }

  // call from database serve
  // Ajax requests should only be made in the componentDidMount lifecycle method.
  // The render method should take in input via props, and return a description of your UI (JSX), nothing else.
  componentDidMount() {
    this.getAllBooks()
  }


  render() {
    console.log('allBooks in render:')
    console.log(this.state.allBooks)

    return (
      <div className="app">

        {this.state.screen === 'list' && (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.state.listShelves.map(shelf => {
                  return(
                    <BookShelf
                      name={shelf}
                      allBooks={this.state.allBooks}
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

        {this.state.screen === 'search' && (
          <BookSearch
            allBooks={this.state.allBooks}
          />
        )}
      </div>


    )
  }
}

export default BooksApp
