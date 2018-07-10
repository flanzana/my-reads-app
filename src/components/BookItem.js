import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
import BookSearch from './BookSearch'
import BookShelf from './BookShelf'

class BookItem extends Component {
	state = {

	}

	render() {
		console.log('Props from bookitem');
		console.log(this.props);

		const { authors, title, img, shelf } = this.props;

		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${img.smallThumbnail})` }}></div>
					<div className="book-shelf-changer">
						<select>
							<option value="move" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors}</div>
			</div>
		)
	}
}


export default BookItem;
