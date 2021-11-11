import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloProvider } from 'react-apollo';

// componentes
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo cliente setup
const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="main">
					<h1>TerraSystem library teste</h1>
					<BookList />
					<AddBook />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
