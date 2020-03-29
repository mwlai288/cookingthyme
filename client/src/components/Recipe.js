import React, { Component } from 'react';

class Recipe extends Component {
	componentDidMount() {
		this.props.getSelectedRecipe(this.props.match.params.id);
	}
	render() {
		const { strMeal } = this.props.singleRecipe;
		return (
			<div>
				<h2>{strMeal}</h2>
			</div>
		);
	}
}

export default Recipe;
