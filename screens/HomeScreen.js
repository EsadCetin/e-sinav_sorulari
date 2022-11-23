import {
	View,
	Text,
	StatusBar,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import React from "react";
import styles from "../assets/styles/HomeScreenStyles";
import { Linking } from "react-native";

const esinav = require("../assets/icons/esinav.jpg");
const trafik = require("../assets/icons/trafik.jpg");
const ilkyardim = require("../assets/icons/ilkyardim.jpg");
const aracteknigi = require("../assets/icons/aracteknigi.jpg");
const trafikadabi = require("../assets/icons/trafikadabi.jpg");
const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>E-Sınav Soruları</Text>
			</View>
			<TouchableOpacity
				style={styles.esinav}
				onPress={() => navigation.navigate("EsinavScreen")}
			>
				<Image source={esinav} style={styles.esinavimage} />
				<Text style={styles.esinavtext}>E-Sınav Çöz</Text>
			</TouchableOpacity>
			<Text style={styles.categories}>Derslere göre testler</Text>
			<View style={styles.dersler}>
				<TouchableOpacity style={styles.trafik}>
					<Image source={trafik} style={styles.trafikimage} />
					<Text style={styles.trafiktext}>Trafik ve Çevre Bilgisi</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ilkyardim}>
					<Image source={ilkyardim} style={styles.ilkyardimimage} />
					<Text style={styles.ilkyardimtext}>İlkyardım Bilgisi</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.aracteknigi}>
					<Image source={aracteknigi} style={styles.aracteknigiimage} />
					<View
						style={{
							width: 100,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text style={styles.aracteknigitext}>Motor ve Araç Tekniği</Text>
					</View>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.trafikadabi}>
				<Image source={trafikadabi} style={styles.trafikadabiimage} />
				<Text style={styles.trafikadabitext}>Trafik Adabı</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					Linking.openURL("tel:0530 540 29 14");
				}}
			>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/icons/phone.png")}
				/>
				<Text style={styles.buttonText}>0530 540 29 14</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
