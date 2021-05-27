function Proceed() {
	return (
		<div>
			<div>
				<h1>Get User</h1>
				<button onClick={getUser}>Submit</button>
				{data ? <Inventory username={data.username} /> : <NotLoggedIn />}
			</div>
		</div>
	);
}

export default Proceed;
