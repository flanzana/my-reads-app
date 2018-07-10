import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
import BookItem from './BookItem'
import BookShelf from './BookShelf'

class BookSearch extends Component {
	state = {
		query : '',

	}

	//metod
	updateQuery = (query) => {
		this.setState({ query: query} )
	}

	
	render() {
		const { query } = this.state;
		console.log('props in booksearch:')
		console.log(this.props);

		const { allBooks } = this.props;

		if (query) {

		}

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<a className="close-search" onClick={() => this.setState({ screen: 'list' })}>Close</a>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input
							type="text"
							placeholder="Search by title or author"
						/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{allBooks.map(book => {
							return(
								<li key={book.id}>
									<BookItem
										authors={book.authors}
										title={book.title}
										img={book.imageLinks}
										shelf={book.shelf}
									/>
								</li>
							)
						})}
					</ol>
				</div>
			</div>
		)
	}
}



export default BookSearch;
