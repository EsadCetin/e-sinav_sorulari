import {
	View,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Image,
	Modal,
} from "react-native";
import React, { useState } from "react";
import styles from "../assets/styles/EsinavScreenStyles";

const next = require("../assets/icons/next.png");
const back = require("../assets/icons/back.png");
const finish = require("../assets/icons/finish.png");

const EsinavScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [colorA, setColorA] = useState("lightgrey");
	const [colorB, setColorB] = useState("lightgrey");
	const [colorC, setColorC] = useState("lightgrey");
	const [colorD, setColorD] = useState("lightgrey");
	const onChangeColorA = () => {
		if (colorA == "lightgrey") {
			setColorA("yellow"),
				setColorB("lightgrey"),
				setColorC("lightgrey"),
				setColorD("lightgrey");
		} else {
			setColorA("lightgrey");
		}
	};
	const onChangeColorB = () => {
		if (colorB == "lightgrey") {
			setColorB("yellow"),
				setColorA("lightgrey"),
				setColorC("lightgrey"),
				setColorD("lightgrey");
		} else {
			setColorB("lightgrey");
		}
	};
	const onChangeColorC = () => {
		if (colorC == "lightgrey") {
			setColorC("yellow"),
				setColorB("lightgrey"),
				setColorA("lightgrey"),
				setColorD("lightgrey");
		} else {
			setColorC("lightgrey");
		}
	};
	const onChangeColorD = () => {
		if (colorD == "lightgrey") {
			setColorD("yellow"),
				setColorB("lightgrey"),
				setColorC("lightgrey"),
				setColorA("lightgrey");
		} else {
			setColorD("lightgrey");
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>E-sınav Soruları</Text>
			</View>
			<Text style={styles.question}>Soru 1)</Text>
			<Text style={styles.text}>
				Çok sayıda yaralının olduğu kazalarda, kazazedelerin durumu
				değerlendirilir ve öncelikli müdahale edilecekler belirlenir. Buna göre
				en son müdahale edilmesi gereken kazazede aşağıdakilerden hangisidir?
			</Text>
			<View style={styles.answer}>
				<TouchableOpacity
					style={{
						borderColor: "grey",
						marginBottom: 15,
						borderWidth: 2,
						borderRadius: 15,
						flexDirection: "row",
						padding: 15,
						backgroundColor: colorA,
					}}
					onPress={() => onChangeColorA()}
				>
					<Text style={styles.choice}>A) </Text>
					<Text style={styles.answerText}>Açık karın yarası olan </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderColor: "grey",
						marginBottom: 15,
						borderWidth: 2,
						borderRadius: 15,
						flexDirection: "row",
						padding: 15,
						backgroundColor: colorB,
					}}
					onPress={() => onChangeColorB()}
				>
					<Text style={styles.choice}>B) </Text>
					<Text style={styles.answerText}>Bilinci yerinde olmayan</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderColor: "grey",
						marginBottom: 15,
						borderWidth: 2,
						borderRadius: 15,
						flexDirection: "row",
						padding: 15,
						backgroundColor: colorC,
					}}
					onPress={() => onChangeColorC()}
				>
					<Text style={styles.choice}>C) </Text>
					<Text style={styles.answerText}>Solunum zorluğu çeken</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderColor: "grey",
						marginBottom: 15,
						borderWidth: 2,
						borderRadius: 15,
						flexDirection: "row",
						padding: 15,
						backgroundColor: colorD,
					}}
					onPress={() => onChangeColorD()}
				>
					<Text style={styles.choice}>D) </Text>
					<Text style={styles.answerText}>Ayak bileğinde çıkık olan</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.icon}>
				<TouchableOpacity>
					<Image source={back} style={styles.icons} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<Image source={finish} style={styles.icons} />
					<Text style={{ fontSize: 12, fontFamily: "Poppins" }}>
						Sınavı Bitir
					</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image source={next} style={styles.icons} />
				</TouchableOpacity>
			</View>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>
							Sınavı bitirmek istediğinizden emin misiniz?
						</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<TouchableWithoutFeedback
								onPress={() => {
									setModalVisible(!modalVisible);
								}}
							>
								<View style={styles.endButton}>
									<Text style={styles.modalText}>İptal</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								onPress={() => {
									setModalVisible(!modalVisible);
									navigation.navigate("ResultScreen");
								}}
							>
								<View style={styles.endButton}>
									<Text style={styles.modalText}>Bitir</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default EsinavScreen;
