import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
//import BookSearch from './BookSearch'
//import BookShelf from './BookShelf'

class BookItem extends Component {

	// help: https://reactjs.org/docs/forms.html#the-select-tag
	changeShelf = (e) => {
		const { book, updateShelf } = this.props;
		updateShelf(book, e.target.value);
		//console.log('Book ' + book.title + ' is moved to shelf ' + e.target.value + '. (bookitem.js)');
	}

	render() {
		//console.log('Props from bookitem');
		//console.log(this.props);

		const { book } = this.props;

		// The search works correctly when a book does not have a thumbnail. (To test this, try searching for "poetry" and "biography").
		let img = '';
		(book.imageLinks) ? (img = book.imageLinks.smallThumbnail) : (img = '');

		// if book doesn't have attribute book.shelf, then put it by default to 'none'
		(book.shelf) ? (book.shelf = book.shelf) : (book.shelf = 'none');


		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${img})` }}></div>
					<div className="book-shelf-changer">
						<select
							value={book.shelf}
							onChange={this.changeShelf}
						>
							<option value="move" disabled defaultValue="none">Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors}</div>
			</div>
		)
	}
}

export default BookItem;
