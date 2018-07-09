import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
import BookItem from './BookItem'
import BookSearch from './BookSearch'

class BookShelf extends Component {
	state = {

	}
	
	render() {
		const { book } = this.props;
		const { shelf } = this.state;

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						<li>
							<BookItem/>
						</li>
					</ol>
				</div>
			</div>
		)
	}
}



export default BookShelf;