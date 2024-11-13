import { Linking, TouchableOpacity, Text } from "react-native"
import styles from "./styles"

const WebLink = () => {
	const handlePress = () => {
		const url = "https://georgiex.co.uk"
		Linking.openURL(url).catch((err) => console.error("Error opening link:", err))
	}

	return (
		<TouchableOpacity onPress={handlePress}>
			<Text style={styles.linkText}>georgiex.co.uk</Text>
		</TouchableOpacity>
	)
}

export default WebLink
