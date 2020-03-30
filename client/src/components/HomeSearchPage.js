import React, { useState } from 'react';

const HomeSearchPage = ({ searchRecipes }) => {
	const [search, setSearch] = useState('');

	const onChange = (e) => setSearch(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		searchRecipes(search);
		setSearch('');
	};

	return (
		<div>
			<h1>Cooking Thyme Cookbook</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="search"
					placeholder="Search Recipes"
					value={search}
					onChange={onChange}
				/>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
};

export default HomeSearchPage;
