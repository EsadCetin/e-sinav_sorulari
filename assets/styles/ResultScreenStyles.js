import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		flexDirection: "column",
	},
	Header: {
		justifyContent: "center",
		backgroundColor: "#57737A",
		height: windowHeight / 15,
		width: windowWidth,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	HeaderText: {
		alignSelf: "center",
		fontFamily: "Poppins",
		fontSize: 30,
		color: "white",
	},
	button: {
		alignItems: "center",
		flexDirection: "row",
		margin: 35,
		bottom: 0,
		position: "absolute",
	},
	home: {
		alignItems: "center",
		alignSelf: "center",
		borderWidth: 2,
		borderRadius: 15,
		flexDirection: "row",
		padding: 5,
		marginRight: 100,
	},
	icons: {
		width: 30,
		height: 30,
	},
	resulticons: {
		width: 32,
		height: 32,
		marginLeft: 5,
		alignItems: "center",
	},
	number: {
		marginTop: 2,
		fontWeight: "400",
		fontSize: 19,
		textAlign: "center",
	},
	result: {
		marginTop: 15,
		flexDirection: "row",
		alignSelf: "center",
	},
	resultText: {
		fontFamily: "Poppins",
		fontSize: 25,
		alignSelf: "center",
		marginTop: 35,
		textAlign: "center",
	},
	hometext: { fontFamily: "Poppins", marginTop: 5 },
	scoreView: { alignItems: "center", marginTop: windowHeight / 20 },
	scoreText: { fontFamily: "Poppins", fontSize: 30 },
});
