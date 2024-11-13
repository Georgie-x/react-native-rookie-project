import { Text, View } from "react-native"
import Props from "./typeDefs"

export default function Instructions(props:Props) {
	
	return (
		<Text>{props.message}</Text>
	)
}
