import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
//import BookSearch from './BookSearch'
//import BookShelf from './BookShelf'

class BookItem extends Component {
	state = {

	}

	changeShelf = (e) => {
		this.props.updateShelf(this.props.book, e.target.value)
		console.log('Book ' + this.props.book.title + ' is moved to shelf ' + e.target.value)
	}

	render() {
		/*console.log('Props from bookitem');
		console.log(this.props);*/

		const { book , updateShelf } = this.props;

		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
					<div className="book-shelf-changer">
						<select
							value={book.shelf}
							onChange={this.changeShelf}
						>
							<option value="move" disabled>Move to...</option>
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
