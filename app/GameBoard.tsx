import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Props from "../app/typeDefs"

const GameBoard = (props: Props) => {
	const handleCellPress = (index: number) => {
		if (props.boardData[index] === "" && props.turn.length === 1) {
			const newBoardData = [...props.boardData]
			newBoardData[index] = props.turn
			props.setBoardData(newBoardData)
			if (
				(newBoardData[0] === props.turn &&
					newBoardData[1] === props.turn &&
					newBoardData[2] === props.turn) ||
				(newBoardData[3] === props.turn &&
					newBoardData[4] === props.turn &&
					newBoardData[5] === props.turn) ||
				(newBoardData[6] === props.turn &&
					newBoardData[7] === props.turn &&
					newBoardData[8] === props.turn) ||
				(newBoardData[0] === props.turn &&
					newBoardData[3] === props.turn &&
					newBoardData[6] === props.turn) ||
				(newBoardData[1] === props.turn &&
					newBoardData[4] === props.turn &&
					newBoardData[7] === props.turn) ||
				(newBoardData[2] === props.turn &&
					newBoardData[5] === props.turn &&
					newBoardData[8] === props.turn) ||
				(newBoardData[0] === props.turn &&
					newBoardData[4] === props.turn &&
					newBoardData[8] === props.turn) ||
				(newBoardData[2] === props.turn &&
					newBoardData[4] === props.turn &&
					newBoardData[6] === props.turn)
			) {
				props.setMessage(`Congratulations! ${props.turn} wins`)
				props.setTurn("win")
				return
			}
			if (!newBoardData.includes("")) {
				props.setTurn("draw")
				props.setMessage("No More Moves, It's a draw!")
				return
			}
			if (props.turn === "X" && newBoardData.includes("")) {
				props.setTurn("O")
				props.setMessage("Noughts' turn: Place a counter")
			}
			if (props.turn === "O" && newBoardData.includes("")) {
				props.setTurn("X")
				props.setMessage("Crosses' turn: Place a counter")
			}
		}
	}

	return (
		<View style={styles.gameBoard}>
			{props.boardData.map((cellData: string, index: number) => (
				<TouchableOpacity key={index} style={styles.cell} onPress={() => handleCellPress(index)}>
					<Text style={styles.text}>{cellData}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

export default GameBoard
