import React from "react";


class List extends React.Component {
 state = {
	 numbers:[1,2,3]
 }

addRandomNumber = () => {
	const randNumber = Math.round(Math.random() * 10)
	this.setState({
		numbers:[...this.state.numbers,randNumber]
	})
}

componentDidMount(){
	console.log('компонент був відображений!')
}

componentDidUpdate(prevProps, prevState) {
//console.log({prevProps,prevState, nextProps: this.props, nextState: this.state})
if (this.state.numbers.length !==prevState.numbers.length) {
	console.log('список чисел оновився!!')
}
}

componentWillUnmount() {
	console.log('компонент був видалений')
}
	render() {
		return (
			<div>
			<ul>
					{this.state.numbers.map((num, index)=> (
						<li key={index}>{num}</li>
						))}
				</ul>
				<button onClick={this.addRandomNumber}>Нове число</button>
				</div>
		)
	}
}


/*const List = () => {
	const  [numbers, setNumbers] = useState([1,2,3])

	const addNumber = () => {
		const randNumber = Math.round(Math.random() * 10)
		const newArr = [...numbers, randNumber]
		setNumbers(newArr)
	}

	return (
		<div>
		<ul>
				{
					numbers.map((num, index)=> (
					<li key={index}>{num}</li>
					))}
			</ul>
			<button onClick={addNumber}>Нове число</button>
			</div>
	)
}*/

export default List
