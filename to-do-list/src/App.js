import React, { useState } from 'react';
import { Button, InputGroup, Form, ListGroup, CloseButton } from 'react-bootstrap';

import './App.css';

function App() {

	const [toDoList, setToDoList] = useState([
		{
			id: 1,
			description: "Cras justo odio Task",
			isComplete: false
		},
		{
			id: 2,
			description: "Cras justo odio Task 2",
			isComplete: false
		},
	]);
	
	const [inputVal, setInputVal] = useState("");

	// const toDoListData = [
	// {
	// 	id: 1,
	// 	description: "Cras justo odio Task",
	// 	isComplete: false
	// },
	// {
	// 	id: 2,
	// 	description: "Cras justo odio Task 2",
	// 	isComplete: false
	// },
	// ];

	const addTask = () => {

		const taskObj = {
			id: 1,
			description: inputVal,
			isComplete: false
		};

		// const arr = [];
		// arr.push(taskObj);
		// console.log("Am I here??", inputVal);

		setToDoList([...toDoList, taskObj]);
	}

	const getInputVal = (event) => setInputVal(event.target.value);

	

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
						onChange={(e) => getInputVal(e)}
					/>
				</InputGroup>

				<ListGroup>
					{toDoList.map((list, index) => {
						return (
							<ListGroup.Item key={index} className="list-item">
								<div key={`default-${index}`}>
									<Form.Check
										className="line-through"
										type={"checkbox"}
										id={`default-${index}`}
										label={list.description}
									/>
								</div>
								<CloseButton />
							</ListGroup.Item>
						)
					})}
					{/* <ListGroup.Item className="list-item">Cras justo odio <CloseButton /></ListGroup.Item> */}
				</ListGroup>
			</div>
		</div>
	);
}

export default App;
