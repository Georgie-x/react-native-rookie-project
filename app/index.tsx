import { View } from "react-native"
import styles from "./styles"
import Headings from "./Headings"
import GameBoard from "./GameBoard"
import WebLink from "./WebLink"
import Instructions from "./Instructions"
import { useState } from "react"

export default function Index() {
	const [boardData, setBoardData] = useState<string[]>(Array(9).fill(""))
	const [turn, setTurn] = useState<string>("O")
	const [message, setMessage] = useState("Noughts turn: Place a counter")

	return (
		<View style={styles.layout}>
			<Headings />
			<GameBoard boardData={boardData} setBoardData={setBoardData} turn={turn} setTurn={setTurn} message={message} setMessage={setMessage}/>
			<Instructions boardData={boardData} setBoardData={setBoardData} turn={turn} setTurn={setTurn} message={message} setMessage={setMessage}/>
			<WebLink />
		</View>
	)
}
