import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItem'
//import BookShelf from './BookShelf'
import * as BooksAPI from '../BooksAPI'
//import escapeRegExp from 'escape-string-regexp'


class BookSearch extends Component {
	state = {
		query : '',
		matchedBooks: []
	}

	// method saves in this.state.query whatever input is (letter by letter) and displays matchedBooks
	updateQuery = (input) => {
		this.setState({ query: input});
		//console.log('Input is: ' + input);
		
		// if query is not empty, call method search from BooksAPI
		if (input) {
			BooksAPI.search(input).then(matchedBooks => {
				// if matchedBooks has length ? true (> 0) :  false (= 0)
				(matchedBooks.length) ? this.setState({ matchedBooks }) : this.setState({ matchedBooks: [] });
			})
		// if query is empty
		} else {
			this.setState({ matchedBooks: [] });
		}
	}
	
	render() {
		const { allBooks, updateShelf } = this.props;
		const { query, matchedBooks } = this.state;


		/* If a book is assigned to a shelf on the main page and that book appears on the search page, 
			the correct shelf should be selected on the search page.*/
		// compare allBooks and matchedBooks
		//help https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe
		if (matchedBooks.length > 0) {
			matchedBooks.forEach((b1) => allBooks.forEach((b2) => {
					if (b1.id === b2.id) {
						b1.shelf = b2.shelf;
						//console.log(b1.id +' vs '+ b2.id);
					}
				})
			);
			console.log('number of matchedBooks is ' + matchedBooks.length)
			console.log(matchedBooks);
		}


		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
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
							value={query}
							onChange={(e) => this.updateQuery(e.target.value)}
						/>

					</div>
				</div>

				<div className="search-books-results">
				{// if there are matchedBooks in array:
					matchedBooks.length !== 0 && (
						<ol className="books-grid">
							{matchedBooks.map(book => {
								return(
									<li key={book.id}>
										<BookItem
											book={book}
											allBooks={allBooks}
											updateShelf={updateShelf}
											matchedBooks={matchedBooks}
										/>
									</li>
								)
							})}
						</ol>
					)
				}
				{// if none book matches the input
					query !== '' && matchedBooks.length === 0 && (
						// TODO: display this 2 second after input in query is written.
						<h3>Sorry, no book found for your query <i>"{query}"</i>.</h3>
					)
				}
				{// if no input, just blank div
					query === '' && (<div></div>)
				}
				</div>

			</div>
		)
	}
}

export default BookSearch;
