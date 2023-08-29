import React, { Component } from 'react';

class AddComponent extends Component {
	state = {
		title: '',
		salary: '',
	};

	handleChangeTitleJob = (event) => {
		this.setState({
			title: event.target.value,
		});
	};

	handleChangeLasttName = (event) => {
		this.setState({
			salary: event.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.title || !this.state.salary) {
			alert('Please fill all fields');
			return;
		}
		// console.log('check data input: ', this.state);
		this.props.addNewJob({
			id: 'abc' + Math.floor(Math.random() * 50),
			title: this.state.title,
			salary: this.state.salary,
		});

		// nhap input xong thi de lai fileds = '' =
		this.setState({
			title: '',
			salary: '',
		});
	};

	render() {
		return (
			<form action='/action_page.php'>
				<label htmlFor='fname'>First name:</label>
				<br />
				<input
					type='text'
					value={this.state.title}
					onChange={(event) => this.handleChangeTitleJob(event)}
				/>
				<br />
				<label htmlFor='lname'>Last name:</label>
				<br />
				<input
					type='text'
					value={this.state.salary}
					onChange={(event) => this.handleChangeLasttName(event)}
				/>
				<br />

				<input
					type='submit'
					value='Submit'
					onClick={(e) => this.handleSubmit(e)}
				/>
			</form>
		);
	}
}

export default AddComponent;
