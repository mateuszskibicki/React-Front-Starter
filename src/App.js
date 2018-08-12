import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




//Check for token
if (localStorage.jwtToken) {
// Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	// Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));

	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Clear current Profile
		store.dispatch(clearCurrentProfile());
		// Redirect to login
		window.location.href = '/login';
	}
}

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App container m-auto">

					{
						// Public routes
						//<Route exact path="/login" component={Login} />
						//<Route exact path="/register" component={Register} />
					}

					<h1 className="display-1">Hello app!</h1>

				</div>
			</Router>
		);
	}
}

export default App;
