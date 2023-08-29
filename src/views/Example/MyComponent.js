import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends Component {
	/**
	 * JSX = return block
	 * fragment
	 */
	state = {
		arrJobs: [
			{ id: 'abc1', title: 'Developers', salary: '800' },
			{ id: 'abc2', title: 'Testers', salary: '700' },
			{ id: 'abc3', title: 'Project Managers', salary: '200' },
		],
	};

	addNewJob = (job) => {
		console.log('Check: Add job: ', job);
		// method 2:
		// let currentJob = this.state.arrJobs;
		// currentJob.push(job); // add job vao currentJob
		this.setState({
			// method 1:
			// clone arrJobs va them new job
			// vd[ 1,3,4.. , job]
			arrJobs: [...this.state.arrJobs, job],
			//  ==============
			// arrJobs: currentJob, // method 2
		});
	};

	deleteJob = (job) => {
		let currentJob = this.state.arrJobs;
		currentJob = currentJob.filter((item) => item.id !== job.id);
		this.setState({
			arrJobs: currentJob,
		});
	};

	render() {
		console.log('==> render: ', this.state);
		return (
			<>
				<AddComponent addNewJob={this.addNewJob} />

				<ChildComponent
					arrJobs={this.state.arrJobs}
					deleteJob={this.deleteJob}
				/>
			</>
		);
	}
}

export default MyComponent;
