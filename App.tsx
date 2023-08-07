
import React, {useState} from "react"
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity  
} from "react-native"

import {styles} from "./style"

const App = () => {

  const [emailField, setEmailField] = useState<string>("");
  const [senhaField, setSenhaField] = useState<string>("");

  function handleBtnLogin(){
    alert(emailField);
    alert(senhaField);
  }

  function handleSingUp(){

  }

  function handleForgetButton(){
    
  }

  return(
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require("./assets/logo.png")} style={styles.logo}/>
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Seja bem vindo(a)! Digite seus dados abaixo.</Text>
      

      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput 
        
          style={styles.inputField}
          placeholder="Digite seu Email"
          placeholderTextColor="#999"
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

       <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput 
          style={styles.inputField}
          placeholder="***********"
          placeholderTextColor="#999"
          secureTextEntry  
          value={senhaField} 
          onChangeText={t => setSenhaField(t)}
        />
      </View>

      <View style={styles.aditionals}>
        <TouchableOpacity onPress={handleForgetButton} style={styles.forgotBtnArea}>
          <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleBtnLogin} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.signUpArea}>
        <Text style={styles.signUpText}>Não tem uma conta ?</Text>
        <TouchableOpacity onPress={handleSingUp}>
          <Text style={styles.signUpBtnText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerArea}>
        <Text style={styles.footerText}>
          Criado por Vinicius da Silva Nogueira
        </Text>
      </View>

      </View>

    </ScrollView>

  );
}

export default App;