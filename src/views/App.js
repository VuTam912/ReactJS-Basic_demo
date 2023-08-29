import logo from './logo.svg';
import './App.scss';
import MyComponent from './../views/Example/MyComponent';
import ListToDo from './../views/Todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<header className='App-header'>
					<Nav />
					<img src={logo} className='App-logo' alt='logo' />

					{/* <MyComponent /> */}
					{/* <ListToDo /> */}

					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/todo'>
							<ListToDo />
						</Route>
						<Route path='/about'>
							<MyComponent />
						</Route>
						{/* exact = neu co 2 '/user' thi su dung  */}
						<Route path='/user' exact>
							<ListUser />
						</Route>
						<Route path='/user/:id'>
							<DetailUser />
						</Route>
					</Switch>
				</header>
				{/* để toast bên ngoài - App.js */}
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
				{/* Same as */}
				<ToastContainer />
			</div>
		</BrowserRouter>
	);
}

export default App;
