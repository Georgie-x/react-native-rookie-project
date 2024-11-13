import { Text, View } from "react-native"
import styles from "./styles"
import Headings from "./Headings"
import GameButton from "./GameButton"
import GameBoard from "./GameBoard"
import WebLink from "./WebLink"
import Instructions from "./Instructions"

export default function Index() {
	return (
		<View style={styles.layout}>
			<Headings />
			<Instructions />
			<GameBoard />
			<GameButton />
			<WebLink />
		</View>
	)
}
