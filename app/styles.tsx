import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "hsla(200, 70%, 70%, 0.5)"
	},
	title: {
		color: "blue",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	subTitle: {
		color: "purple",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		padding: 2,
	},
	cell: {
		borderWidth: 2,
		borderColor: "purple",
		borderRadius: 1,
		width: "33%",
		height: "33%",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 50,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "pink",
	},
	gameBoard: {
		flexDirection: "row",
		flexWrap: "wrap",

		width: 300,
		height: 300,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
	},
	linkText: {
		color: "blue",
		textDecorationLine: "underline",
	},
})

export default styles
