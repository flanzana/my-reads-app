import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
import BookItem from './BookItem'
//import BookSearch from './BookSearch'

class BookShelf extends Component {
	
	render() {
		console.log('Props from bookshelf');
		console.log(this.props);

		const { shelfName, allBooks, updateShelf } = this.props;

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelfName}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{allBooks
							// filter books based on name of shelf 
							//.filter(book => book.shelf === shelfName)
							.map(book => {
								return(
									<li key={book.id}>
										<BookItem
											book={book}
											updateShelf={updateShelf}
										/>
									</li>
								)
							})
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf;
