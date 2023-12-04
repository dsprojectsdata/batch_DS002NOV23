import React, { useState } from 'react';
import { Button, InputGroup, Form, ListGroup, CloseButton } from 'react-bootstrap';
// import './App.css';
import './style.scss';

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

	const getInputVal = (event) => setInputVal(event.target.value);

	const removeTask = (id) => {

		const filterList = toDoList.filter((list) => {
			if(list.id !== id){
				return list;
			}
		});

		setToDoList(filterList);
	}

	const toggleCompleteVal = (id) => {

		const updatedArr = toDoList.map((list) => {
			// if(list.id === id){
			// 	return {...list, isComplete: !list.isComplete};
			// }else{
			// 	return list;
			// }

			return list.id === id ? {...list, isComplete: !list.isComplete} : list;
		});

		// console.log("updatedArr >>", updatedArr);
		setToDoList(updatedArr);

	}

	/*
	
	const obj1 = {id: 1, name: "asd", age: 20, location: "jaipur", ....}
	fatherName: "abcd"
	const obj2 = {...obj1, fatherName: "abcd", age: 54}

	{..., fathg, age: 54}

	- Add value on enter key
	- confirm box on click of close button
	- Edit the task

	*/

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
						onChange={(e) => getInputVal(e)}
					/>
				</InputGroup>

				<ListGroup>
					{toDoList.map((list, index) => {
						return (
							<ListGroup.Item key={index} className="list-item">
								<Form.Check
									className={list.isComplete ? "line-through" : ""}
									type={"checkbox"}
									// checked={list.isComplete}
									id={`check-${index}`}
									label={list.description}
									onClick={() => toggleCompleteVal(list.id)}
								/>
								<CloseButton onClick={() => removeTask(list.id)} />
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
