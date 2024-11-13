import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
	},
	title: {
		color: "blue",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	
	},
	subTitle: {
		color: "red",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		padding:2,
	},
	cell: {
		borderWidth: 2,
		borderColor: "red",
		borderRadius: 1,
		width: "33%",
        height: "33%",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 50,
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
	linkText: {
		color: 'blue',
		textDecorationLine: 'underline',
	},

})

export default styles
