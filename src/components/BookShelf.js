import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
import BookItem from './BookItem'
import BookSearch from './BookSearch'

class BookShelf extends Component {
	state = {

	}
	
	render() {
		console.log('Props from bookshelf');
		console.log(this.props);

		const { shelfName, allBooks } = this.props;
		//const { shelf } = this.state;

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelfName}</h2>
				<div className="bookshelf-books">
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



export default BookShelf;
