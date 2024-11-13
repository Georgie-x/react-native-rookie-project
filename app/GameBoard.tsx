import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Props from "../app/typeDefs"

const GameBoard = (props:Props) => {

	const handleCellPress = (index: number) => {
		if (props.boardData[index] === "") {
			const newBoardData = [...props.boardData]
			newBoardData[index] = props.turn
			props.setBoardData(newBoardData)
			
			if (props.turn === "X") props.setTurn("O")
			if (props.turn === "O") props.setTurn("X")
		}
	}

	return (
		<View style={styles.gameBoard}>
			{props.boardData.map((cellData:string, index:number) => (
				<TouchableOpacity key={index} style={styles.cell} onPress={() => handleCellPress(index)}>
					<Text>{cellData}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

export default GameBoard
