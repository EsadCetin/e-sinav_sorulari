import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../assets/styles/ResultScreenStyles";

const test = require("../assets/icons/test.png");
const home = require("../assets/icons/home.png");
const trueicon = require("../assets/icons/true.png");
const falseicon = require("../assets/icons/false.png");
const select = require("../assets/icons/select.png");

const SonucScreen = ({ navigation }) => {
	useEffect(() => {
		const onChangeColor = () => {
			if (score < "70") {
				setColor("red");
				setSuccess("Başarısız oldunuz");
			} else {
				setColor("green"), setSuccess("Başarılı oldunuz");
			}
		};
		return onChangeColor;
	});

	const [success, setSuccess] = useState();
	const [score, setScore] = useState("64");
	const [color, setColor] = useState();

	return (
		<View style={styles.container}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>Sonuçlar</Text>
			</View>
			<View style={styles.scoreView}>
				<Text style={styles.scoreText}>Aldığınız puan</Text>
				<Text style={{ fontFamily: "Poppins", fontSize: 25, color: color }}>
					{score}
				</Text>
				<Text style={{ fontFamily: "Poppins", fontSize: 20, color: color }}>
					{success}
				</Text>
			</View>
			<View style={styles.result}>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>1</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>2</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>3</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>4</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={select} style={styles.resulticons}>
						<Text style={styles.number}>5</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>6</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>7</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>8</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>9</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>10</Text>
					</ImageBackground>
				</TouchableOpacity>
			</View>
			<View style={styles.result}>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>11</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>12</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>13</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>14</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={select} style={styles.resulticons}>
						<Text style={styles.number}>15</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>16</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>17</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>18</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>19</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>20</Text>
					</ImageBackground>
				</TouchableOpacity>
			</View>
			<View style={styles.result}>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>21</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>22</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>23</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>24</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>25</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>26</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>27</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>28</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>29</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>30</Text>
					</ImageBackground>
				</TouchableOpacity>
			</View>
			<View style={styles.result}>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>31</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>32</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>33</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>34</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>35</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>36</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={select} style={styles.resulticons}>
						<Text style={styles.number}>37</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>38</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>39</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>40</Text>
					</ImageBackground>
				</TouchableOpacity>
			</View>
			<View style={styles.result}>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>41</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>42</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>43</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>44</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>45</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>46</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={falseicon} style={styles.resulticons}>
						<Text style={styles.number}>47</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>48</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>49</Text>
					</ImageBackground>
				</TouchableOpacity>
				<TouchableOpacity>
					<ImageBackground source={trueicon} style={styles.resulticons}>
						<Text style={styles.number}>50</Text>
					</ImageBackground>
				</TouchableOpacity>
			</View>
			<Text style={styles.resultText}>32 doğrunuz var</Text>
			<Text style={styles.resultText}>
				Yanlış cevaplarınızı sorulara tıklayarak görebilirsiniz.
			</Text>
			<View style={styles.button}>
				<TouchableOpacity
					style={styles.home}
					onPress={() => navigation.navigate("EsinavScreen")}
				>
					<Image source={test} style={styles.icons} />
					<Text style={styles.hometext}>Başa Dön</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.home}
					onPress={() => navigation.navigate("HomeScreen")}
				>
					<Image source={home} style={styles.icons} />
					<Text style={styles.hometext}>Ana Sayfa</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SonucScreen;
