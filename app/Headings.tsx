import { Text, View } from "react-native"
import styles from "./styles"

export default function Headings() {
	return (
		<View>
			<Text style={styles.title}>Noughts and Crosses</Text>
			<Text style={styles.subTitle}>My first React Native app</Text>
		</View>
	)
}
