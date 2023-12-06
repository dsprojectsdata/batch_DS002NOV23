import React, { useState } from 'react';
import { Button, InputGroup, Form, ListGroup, CloseButton } from 'react-bootstrap';
import ListComp from './ListComp';
import './App.css';
// import './style.scss';

let i = 1;

function App() {

	const [toDoList, setToDoList] = useState([]);
	const [inputVal, setInputVal] = useState("");

	const addTask = () => {
		
		const taskObj = {
			id: i,
			description: inputVal,
			isComplete: false
		};
		
		setToDoList([...toDoList, taskObj]);
		setInputVal("");

		i++;
	}

	const removeTask = (id) => {

		const filterList = toDoList.filter((list) => list.id !== id && list );

		setToDoList(filterList);
	}

	const toggleCompleteVal = (id) => {

		const updatedArr = toDoList.map((list) => list.id === id ? {...list, isComplete: !list.isComplete} : list );

		setToDoList(updatedArr);

	}

	return (
		<div className="App text-white">
			<div className='to-do-list bg-gray w-25 p-4'>
				<h4>To Do list</h4>

				<InputGroup className="mt-4 mb-3">
					<Button variant="outline-secondary" id="button-addon1" onClick={addTask}>
						Add
					</Button>
					<Form.Control
						placeholder="Add your task"
						value={inputVal}
						onChange={(event) => setInputVal(event.target.value)}
					/>
				</InputGroup>

				<ListGroup>
					{toDoList.map((list, index) => {
						return (
							<ListComp key={index} list={list} toggleCompleteVal={toggleCompleteVal} removeFn={removeTask} />
						)
					})}
				</ListGroup>
			</div>
		</div>
	);
}

export default App;
