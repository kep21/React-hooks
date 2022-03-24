import React,{useState} from 'react';
import './App.css';

function App() {
	//let numbers = [1,222,3]

	const  [numbers, setNumbers] = useState([1,22,3])

	const addNumber = () => {
	const randNumber =Math.round(Math.random() * 10)
	setNumbers([...numbers, randNumber])
	}
  return (
    <div className="App">
      <ul>
				{
					numbers.map((num, index)=> (
					<li key={index}>{num}</li>
					))}
			</ul>
			<button onClick={addNumber}>Нове число</button>
    </div>
  );
}

export default App;
