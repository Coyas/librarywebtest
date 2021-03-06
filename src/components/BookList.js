import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

// make grapgql queries
const getBooksQuery = gql`
	{
		books {
			name
			genre
			id
			author {
				name
				age
			}
		}
	}
`;

class BookList extends Component {
	displayBooks() {
		let data = this.props.data;
		if (data.loading) {
			return <div>Loading books...</div>;
		} else {
			return data.books.map(book => {
				return (
					<li key={book.id}>
						{book.name} : {book.genre} : {book.author.name} : {book.author.age}
					</li>
				);
			});
		}
	}
	render() {
		console.log(this.props);
		return (
			<div>
				<ul id="book-list">{this.displayBooks()}</ul>
			</div>
		);
	}
}

export default graphql(getBooksQuery)(BookList);
