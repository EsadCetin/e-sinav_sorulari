import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		flexDirection: "column",
	},
	view: { alignItems: "center" },
	text: {
		fontFamily: "Poppins",
		fontSize: 35,
		paddingTop: windowHeight / 50,
	},
	imageContainer: {
		paddingTop: windowHeight / 10,
	},
	image: {
		width: 180,
		height: 180,
		borderRadius: 18,
	},
	inputView: {
		borderRadius: 15,
		marginTop: windowHeight / 12,
		height: windowHeight / 20,
		width: windowWidth / 1.2,
		backgroundColor: "#57737A",
	},
	input: {
		fontFamily: "Poppins",
		fontSize: windowWidth / 22,
		marginTop: "2.5%",
		marginStart: "6%",
	},
	loginButton: {
		width: windowWidth / 3,
		height: windowHeight / 15,
		backgroundColor: "#57737A",
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		marginTop: windowHeight / 20,
	},
	textLoginButton: {
		fontSize: windowWidth / 22,
		color: "white",
		marginTop: "2.5%",
		fontFamily: "Poppins",
		color: "white",
	},
	about: {
		fontSize: 20,
		position: "absolute",
		fontFamily: "Poppins",
	},
});
