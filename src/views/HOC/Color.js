import React from 'react';

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// wrapper 1 component - bao boc 1 component vao tao 1 component moi ->
// moi khi render o component nao do thi se tao mot random color cho cac the div o moi component da co
const Color = (WrappedComponent) => {
	const colorRandom = getRandomColor();
	return (props) => (
		<div style={{ color: colorRandom }}>
			<WrappedComponent {...props} />
		</div>
	);
};

export default Color;
