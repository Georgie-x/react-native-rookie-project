import { Text, View } from "react-native"
import styles from "./styles"

export default function Headings() {
	return (
		<View>
			<Text style={styles.title}>Georgiex first rn app</Text>
			<Text style={styles.subTitle}>Noughts and Crosses</Text>
		</View>
	)
}
