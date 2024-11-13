import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { useState } from "react"

export default function GameBoard() {
	const [boardData, setBoardData] = useState<Array<string>>(Array(9).fill(""))
	return (
		<View style={styles.gameBoard}>
			<TouchableOpacity style={styles.cell}id='cell1'>
				<Text> hi</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.cell} id='cell2'>
				<Text> hi2</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.cell} id='cell3'>
				<Text> hi</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.cell} id='cell4'>
				<Text> hi</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.cell} id='cell5'>
				<Text> hi</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.cell} id='cell6'>
				<Text> hi</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.cell} id='cell7'>
				<Text> hi</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.cell} id='cell8'>
				<Text> hi</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.cell} id='cell9'>
				<Text> hi</Text>
			</TouchableOpacity>
		</View>
	)
}
