import React, { Component } from 'react';
import './Demo.scss';

class ChildComponent extends Component {
	state = {
		showJobs: false,
	};

	handlesShowHide = () => {
		this.setState({
			// toggle
			showJobs: !this.state.showJobs,
		});
	};

	handleOnClickDelete = (obj) => {
		this.props.deleteJob(obj); // goi component cha va cha se xu ly delete.
	};

	render() {
		// console.log('>> Check props: ', this.props);

		let { arrJobs } = this.props;
		let { showJobs } = this.state;

		let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
		console.log('>> Check conditional: ', check);

		return (
			<>
				<div>
					{showJobs === false && (
						<button
							style={{ color: 'red' }}
							onClick={() => {
								this.handlesShowHide();
							}}
						>
							Show
						</button>
					)}
				</div>
				{/* state:fasle && true <= <div> co return */}
				{/* neu showJobs:true => show   */}
				{showJobs && (
					<>
						<div className='job-lists'>
							{arrJobs.map((item, index) => {
								return (
									<div key={item.id}>
										{item.title} - {item.salary} <></>{' '}
										<span
											onClick={() => this.handleOnClickDelete(item)} // item o ham map.
											style={{ cursor: 'pointer' }}
										>
											{' '}
											x{' '}
										</span>
									</div>
								);
							})}
						</div>
						<div>
							<button
								onClick={() => {
									this.handlesShowHide();
								}}
							>
								Hide
							</button>
						</div>
					</>
				)}
			</>
		);
	}
}

// khuyen ko nen dung arrow function vi chua ro tuong lai co sai nhieu va phap trien tiep ko.
// const ChildComponent = (props) => {
// 	console.log('>> Check props: ', props);

// 	let { arrJobs } = props;

// 	return (
// 		<div className='job-lists'>
// 			{arrJobs.map((item, index) => {
// 				// +=> convert từ salary string => number.
// 				if (+item.salary > 500) {
// 					return (
// 						<div key={item.id}>
// 							{item.title} - {item.salary} $
// 						</div>
// 					);
// 				}
// 			})}
// 		</div>
// 	);
// };

export default ChildComponent;
