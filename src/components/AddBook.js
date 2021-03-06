import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

// make grapgql queries
const getAuthorsQuery = gql`
	{
		authors {
			name
			age
			id
		}
	}
`;
class AddBook extends Component {
	displayAuthor() {
		let data = this.props.data;
		if (data.loading) {
			return <div>Loading ....</div>;
		} else {
			return data.authors.map(author => {
				return (
					<option key={author.id} value={author.id}>
						{author.name}
					</option>
				);
			});
		}
	}
	render() {
		return (
			<form id="add-book">
				<div className="field">
					<label>Book Name:</label>
					<input type="text" />
				</div>

				<div className="field">
					<label>Genre:</label>
					<input type="text" />
				</div>

				<div className="field">
					<label>Author:</label>
					<select>
						<option>Select Author</option>
						{this.displayAuthor()}
					</select>
				</div>

				<button>+</button>
			</form>
		);
	}
}

export default graphql(getAuthorsQuery)(AddBook);
