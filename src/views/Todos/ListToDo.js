import React, { Component } from 'react';
import './ListToDo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import Color from './../HOC/Color';

class ListToDo extends Component {
	state = {
		// mot mang luu chua o trong data voi type la object
		listTodos: [
			{ id: 'todo1', title: 'Doing homework' },
			{ id: 'todo2', title: 'Make videos' },
			{ id: 'todo3', title: 'Fixing bugs' },
		],
		// de gan 1 object Todo de hien thong tin len input va edit.
		editTodo: {},
	};

	AddNewTodo = (todo) => {
		this.setState({
			// [...clone, new todo]
			listTodos: [...this.state.listTodos, todo],
		});
		toast.success('Add new todo successfully!');
	};

	handleDeleteTodo = (todo) => {
		let currentTobos = this.state.listTodos;
		// tra ve mot list moi va ko co todo.id
		currentTobos = currentTobos.filter((item) => item.id !== todo.id);
		this.setState({
			listTodos: currentTobos,
		});
		toast.info('Delete todo successfully!');
	};

	// Xu ly Onclick Edit (SAVE)
	HandleEditTodo = (todo) => {
		// editTodo = chi co object ko o trong array va da co data duoc cap nhap state o trong ham onChangeEdit
		let { editTodo, listTodos } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		// save - khi edit lluon phai co id de xac dinh dung data do
		if (isEmptyObj === false && editTodo.id === todo.id) {
			//copy
			let listTodosCopy = [...listTodos];

			// Find index in array to update objects
			let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

			// vi editTodo thay doi trong ham handleOnChangeEditTodo va update trong state
			// nen ta chi gan editTodo
			listTodosCopy[objIndex].title = editTodo.title;
			// Update state va chuyen editTodo:{} <= Object.keys se check va input ko hien nữa  ;
			this.setState({
				listTodos: listTodosCopy,
				editTodo: {},
			});
			toast.success('Edit todo successfully!');
			return; //<= khi thuc thi xong nen thoat function ra. De ko chajy tiep o edit o duoi nua.
		}
		//edit
		this.setState({
			editTodo: todo,
		});
	};

	// Xu ly onChangeEdit khi input mot chuoi
	handleOnChangeEditTodo = (e) => {
		// gan ban copy vao bien eitTodoCopy
		let editTodoCopy = { ...this.state.editTodo }; // Note <= editTodo is object {}  . Not array []
		editTodoCopy.title = e.target.value;
		this.setState({
			editTodo: editTodoCopy,
		});
	};

	render() {
		let { listTodos, editTodo } = this.state;
		// xac dinh da click edit hay chua. | true === 0 <= chua edit
		let isEmptyObj = Object.keys(editTodo).length === 0;

		return (
			<>
				<p>Simple Todo App with React.js</p>
				<div className='list-todo-container'>
					<AddTodo AddNewTodo={this.AddNewTodo} />
					<div className='list-todo-content'>
						{listTodos &&
							listTodos.length > 0 &&
							listTodos.map((item, index) => {
								return (
									<div key={item.id} className='todo-child'>
										{/* neu chua click edit => show list*/}
										{isEmptyObj === true ? (
											<span>
												{index + 1} - {item.title}{' '}
											</span>
										) : (
											// neu click edit va xac dinh id vua click edit xong
											<>
												{editTodo.id === item.id ? (
													<span>
														{index + 1} -{' '}
														<input
															type='text'
															value={editTodo.title}
															onChange={(e) => this.handleOnChangeEditTodo(e)}
														/>
													</span>
												) : (
													// con lai thi van in list binh thuong ko co input
													<span>
														{index + 1} - {item.title}{' '}
													</span>
												)}
											</>
										)}

										<button
											className='edit'
											onClick={() => this.HandleEditTodo(item)}
										>
											{/* check button is Save or Edit ? */}
											{isEmptyObj === false && editTodo.id === item.id
												? 'Save'
												: 'Edit'}
										</button>
										<button
											className='delete'
											onClick={() => {
												this.handleDeleteTodo(item);
											}}
										>
											Delete
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</>
		);
	}
}

export default Color(ListToDo);
