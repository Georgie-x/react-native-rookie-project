import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		color: "red",
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 20,
	},
	subTitle: {
		color: "blue",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	cell: {
		borderWidth: 2,
		borderColor: "red",
		borderRadius: 1,
		width: "33%",
        height: "33%",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
    gameBoard: {
        flexDirection: "row",
        flexWrap: "wrap",
		borderWidth: 2,
		borderColor: "red",
		borderRadius: 1,
		width: 300,
		height: 300,
		justifyContent: "center",
		alignItems: "center",
        backgroundColor: "pink",

	},

})

export default styles
