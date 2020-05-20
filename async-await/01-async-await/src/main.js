const minhaPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => { resolve('OK') }, 2000);
});

/*minhaPromise()
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(err);
	})
*/

/*minhaPromise().then(response => {
	console.log(response);
})
minhaPromise().then(response => {
	console.log(response);
})
minhaPromise().then(response => {
	console.log(response);
})*/

/*async function executaPromise() {
	const response1 = await minhaPromise();
	console.log(response1);
	const response2 = await minhaPromise();
	console.log(response2);
	const response3 = await minhaPromise();
	console.log(response3);
}

executaPromise();*/

const executaPromise = async () => {
	const response1 = await minhaPromise();
	console.log(response1);
	const response2 = await minhaPromise();
	console.log(response2);
	const response3 = await minhaPromise();
	console.log(response3);
}

executaPromise();
