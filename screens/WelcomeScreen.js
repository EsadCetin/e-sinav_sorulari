import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "../assets/styles/WelcomeScreenStyles";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const logo = require("../assets/icons/logo.jpg");

const WelcomeScreen = ({ navigation }) => {
	return (
		<DismissKeyboard>
			<KeyboardAvoidingView
				enabled
				behavior={"position"}
				style={styles.container}
			>
				<View style={styles.view}>
					<View style={styles.imageContainer}>
						<Image source={logo} style={styles.image} />
					</View>
					<Text style={styles.text}>E-Sınav Soruları</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.input}
							selectionColor={"#57737A"}
							placeholder="TC Kimlik Numaranız"
						></TextInput>
					</View>
					<TouchableOpacity
						style={styles.loginButton}
						onPress={() => navigation.navigate("HomeScreen")}
					>
						<Text style={styles.textLoginButton}>Giriş Yap</Text>
					</TouchableOpacity>
					<Text style={styles.about}>Yeni Ayaş Sürücü Kursu</Text>
				</View>
			</KeyboardAvoidingView>
		</DismissKeyboard>
	);
};

export default WelcomeScreen;
