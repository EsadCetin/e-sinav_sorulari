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
	question: {
		fontSize: 15,
		fontWeight: "bold",
		marginLeft: windowWidth / 20,
		marginTop: windowHeight / 45,
	},
	text: {
		fontSize: 15,
		fontFamily: "Poppins",
		alignSelf: "center",
		textAlign: "justify",
		padding: 15,
	},
	answer: {
		justifyContent: "center",
		flexDirection: "column",
		padding: 15,
	},
	choice: { fontSize: 20, fontWeight: "bold" },
	button: {
		borderColor: "grey",
		marginBottom: 15,
		borderWidth: 2,
		borderRadius: 15,
		flexDirection: "row",
		padding: 15,
	},
	answerText: {
		fontFamily: "Poppins",
		justifyContent: "center",
		alignSelf: "center",
		marginTop: windowHeight / 200,
	},
	position: {
		backgroundColor: "grey",
		width: 350,
		height: 60,
		borderRadius: 18,
		alignSelf: "center",
		marginTop: 15,
	},
	icons: {
		alignSelf: "center",
		width: 30,
		height: 30,
	},
	icon: {
		marginTop: 85,
		padding: 15,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 25,
		alignItems: "center",
		elevation: 5,
	},
	modalText: {
		fontSize: 15,
		fontFamily: "Poppins",
		textAlign: "center",
	},
	endButton: {
		backgroundColor: "lightgrey",
		marginLeft: 25,
		marginRight: 25,
		marginTop: 10,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "grey",
		padding: 5,
		width: 75,
	},
});
