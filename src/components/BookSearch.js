import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
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
		console.log('Input is: ' + input);
		
		// if query is not empty, call method search from BooksAPI
		if (input) {
			BooksAPI.search(input).then(matchedBooks => {
				// if matchedBooks has length ? true (> 0) :  false (= 0)
				(matchedBooks.length) ? this.setState({ matchedBooks }) : this.setState({ matchedBooks: [] });
				console.log('matchedBooks length is: ' + matchedBooks.length)
				console.log(matchedBooks)
			})
		// if query is empty
		} else {
			this.setState({ matchedBooks: [] });
		}
	}


	
	render() {
		const { allBooks, updateShelf } = this.props;
		const { query, matchedBooks } = this.state;

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
							value={query}
							onChange={(e) => this.updateQuery(e.target.value)}
						/>

					</div>
				</div>

				<div className="search-books-results">
				{// if there are matchedBooks in array:
					matchedBooks.length != 0 && (
						<ol className="books-grid">
							{matchedBooks.map(book => {
								return(
									<li key={book.id}>
										<BookItem
											book={book}
											updateShelf={updateShelf}
										/>
									</li>
								)
							})}
						</ol>
					)
				}
				{// if none book matches the input
					query != '' && matchedBooks.length === 0 && (
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

/*
2) The search page behaves correctly:
a) As the user types into the search field, books that match the query are displayed on the page.
b) Search results are not shown when all of the text is deleted out of the search input box.
c) Invalid queries are handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author.
	(To test this, try searching for "poetry" and "biography").
e) The user is able to search for multiple words, such as “artificial intelligence.”

If a book is assigned to a shelf on the main page and that book appears 
on the search page, the correct shelf should be selected on the search page. 
If that book's shelf is changed on the search page, that change should 
be reflected on the main page as well. The option "None" should be 
selected if a book has not been assigned to a shelf.

When an item is categorized on the search page and the user navigates to 
the main page, it appears on that shelf in the main page.
*/