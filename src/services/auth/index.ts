/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = true;
		localStorage.setItem(
			'token',
			JSON.stringify('g$RH#R7gf438F*N$8f34fJWYF$3')
		);
		setTimeout(callback, 100); // fake async
	},
	signout(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = false;
		localStorage.removeItem('token');
		setTimeout(callback, 100);
	}
};

export { fakeAuthProvider };
