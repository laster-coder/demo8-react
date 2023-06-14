import { useState } from "react";
import Cell from "./Cell";
import "./Chessboard.css";

function Chessboard() {
	const [Cells, setCells] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [n, setN] = useState(0);
	const [f, setF] = useState(false);
	const onClickCz = function () {
		setCells([
			[null, null, null],
			[null, null, null],
			[null, null, null],
		]);
		setN(0);
		setF(false);
	};
	const onClickCell = (row, cel) => {
		console.log(row);
		console.log(cel);
		const copy = JSON.parse(JSON.stringify(Cells));
		if (copy[row][cel] == null && f == false) {
			copy[row][cel] = n % 2 == 0 ? "X" : "O";
			setCells(copy);
			console.log(Cells, "DI YI CI");
			setN(n + 1);
			for (let i = 0; i < 3; i++) {
				if (
					copy[i][0] == copy[i][1] &&
					copy[i][1] == copy[i][2] &&
					copy[i][0] !== null
				) {
					console.log("win" + copy[i][0]);
					setF(true);
				}
				break;
			}
			for (let i = 0; i < 3; i++) {
				if (
					copy[0][i] == copy[1][i] &&
					copy[1][i] == copy[2][i] &&
					copy[0][i] !== null
				) {
					console.log("win" + copy[0][i]);
					setF(true);
				}
				break;
			}
			if (
				copy[0][0] == copy[1][1] &&
				copy[1][1] == copy[2][2] &&
				copy[0][0] !== null
			) {
				console.log("win" + copy[0][0]);
				setF(true);
			}
			if (
				copy[0][2] == copy[1][1] &&
				copy[1][1] == copy[2][0] &&
				copy[0][2] !== null
			) {
				console.log("win" + copy[0][2]);
				setF(true);
			}
		}
	};
	return (
		<div>
			{Cells.map((items, row) => {
				return (
					// eslint-disable-next-line react/jsx-key
					<div className="row">
						{items.map((item, cel) => {
							// eslint-disable-next-line react/jsx-key
							return (
								// eslint-disable-next-line react/jsx-key
								<Cell
									key={`${row}-${cel}`}
									text={item}
									onClick={() => {
										onClickCell(row, cel);
									}}
								/>
							);
						})}
					</div>
				);
			})}
			{f && (
				<div className="Bu">
					<div className="Gm">GameOver</div>
					<div className="Cz" onClick={onClickCz}>
						重置
					</div>
				</div>
			)}
		</div>
	);
}

export default Chessboard;
