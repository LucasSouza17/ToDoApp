import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

import GoogleLogo from "../../assets/logos/google.svg";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Feather name="check-circle" size={48} color="#f2664c" />
        <Text style={styles.logo}>Tasks.io</Text>
      </View>
      <View>
        <Text style={styles.title}>Manage your task easily</Text>
        <Text style={styles.subtitle}>
          Easy way to manage daily task and office management
        </Text>
      </View>
      <View>
        <View style={styles.button}>
          <View style={styles.contentButton}>
            <Text style={styles.buttonText}>Sign in with</Text>
            <GoogleLogo width={100} height={30} style={{ marginTop: 5 }} />
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Feather name="arrow-right" size={24} color="#7baefb" />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign in with your email</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <Feather name="arrow-right" size={24} color="#7baefb" />
          </TouchableOpacity>
        </View>
        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccount}>Not have an account yet?</Text>
          <TouchableOpacity>
            <Text style={styles.createAccountLink}>{" "}Create here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
