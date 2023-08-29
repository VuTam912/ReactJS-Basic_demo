// Reducer: execute/xu ly khi nhan duoc action

const initState = {
	users: [
		{
			id: 1,
			name: 'Alphonse',
		},
		{
			id: 2,
			name: 'Edaward',
		},
		{
			id: 3,
			name: 'Eric',
		},
	],
	posts: [],
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'DELETE_USER':
			console.log('>>>run into delete user', action);
			let users = state.users;
			users = users.filter((item) => item.id !== action.payload.id);
			// return => tra ve va gan vao props
			// tra về một bản clone state với user đã filter để ghi đè
			return {
				...state,
				users, // ghi de vao state
			};
		case 'CREATE_USER':
			let id = Math.floor(Math.random() * 10000);
			let user = { id: id, name: `random - ${id}` };
			return {
				...state,
				users: [...state.users, user], // ghi de vao ...state
			};
		default:
			return state;
	}
	// khi action xong cung can phai return state cho props lai lan nua
	// hoac cho return state o trong case DELETE_USER
	// return state;
};

export default rootReducer;
