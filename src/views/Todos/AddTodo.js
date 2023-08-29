import React, { Component } from 'react';
import { toast } from 'react-toastify';

class AddTodo extends Component {
	state = {
		title: '',
	};

	handleOnChangeTitle = (e) => {
		this.setState({
			title: e.target.value,
		});
	};

	handleAddTodo = () => {
		//check xem input co bi undefined/null/empty ko.
		if (this.state.title === '') {
			toast.error('Please enter a title'); // neu la empty thi alert
			return; // <<== !!
		} else {
			let todo = {
				id: Math.floor(Math.random() * 100),
				title: this.state.title,
			};
			this.props.AddNewTodo(todo);
			// Add done thì chuyển state mặc định
		}
		this.setState({
			title: '',
		});
	};

	render() {
		let { title } = this.state;
		return (
			<div className='add-todo'>
				<input
					type='text'
					value={title}
					onChange={(e) => this.handleOnChangeTitle(e)}
				/>
				<button
					type='button'
					className='add'
					onClick={() => this.handleAddTodo()}
				>
					Add
				</button>
			</div>
		);
	}
}

export default AddTodo;
