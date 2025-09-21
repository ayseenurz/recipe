import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { Colors } from "../constants/Colors";

const Header = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hoşgeldin, </Text>
            <Text style={styles.punchline}>{user.displayName}</Text>
          </View>
          <View>
            <Text style={styles.logo}>YEMEK{"\n"}TARİFLERİ</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    marginTop:-60,
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    height: 140,
    backgroundColor: Colors.RED,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 30,
    display: "flex",
    flexDirection: "row",
  },
  welcomeText: {
    fontFamily: "fRegular",
    fontSize: "18%",
    color: "#eccc7c",
  },
  punchline: {
    fontFamily: "fExtraBold",
    color: "#ffffff",
    fontSize: "25%",
  },
  logo: {
    fontFamily: "fExtraBold",
    fontSize: 24,
    textAlign: "right",
    color: Colors.YELLOW,
  },
});

export default Header;
