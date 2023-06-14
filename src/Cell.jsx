import "./Cell.css";
// eslint-disable-next-line react/prop-types
function Cell({ onClick, text }) {
	return (
		<div className="Cell" onClick={onClick}>
			{text}
		</div>
	);
}

export default Cell;
