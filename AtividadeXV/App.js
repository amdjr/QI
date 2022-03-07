/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// In App.js in a new project

import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Animated,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Fontisto';

const clickHandler = () => {
  alert('Botão Clicado');
};

function HomeScreen({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style={styles.titulo}>Atividade XV</Text>
      <Text style={styles.bio}>by: Adilson Monteiro</Text>
      <Button
        color="orange"
        title="Tela 1"
        onPress={() => navigation.navigate('Tela1')}
      />
      <Button
        color="orange"
        title="Tela 2"
        onPress={() => navigation.navigate('Tela2')}
      />
      <Button
        color="orange"
        title="Tela 3"
        onPress={() => navigation.navigate('Tela3')}
      />
      <Button
        color="orange"
        title="Tela 4"
        onPress={() => navigation.navigate('Tela4')}
      />
    </View>
  );
}

function Tela1({navigation}) {
  return (
    <View style={styles.principal}>
      <StatusBar style={{flex: 1}} backgroundColor="#2B3F97" />
      <View style={styles.div}>
        <Text style={styles.text2}>Camera</Text>
        <Icon name="ellipsis-v" style={styles.icone1} size={15} />
      </View>
      <TouchableHighlight activeOpacity={0.7} onPress={clickHandler}>
        <View style={styles.div2}>
          <Icon name="camera" size={25} style={styles.icone2} />
        </View>
      </TouchableHighlight>
    </View>
  );
}
function Tela2() {
  return (
    <View>
      <Image source={require('./img/game1.jpg')} style={styles.bkg} />
      <TouchableOpacity activeOpacity={0.7} onPress={clickHandler}>
        <Image source={require('./img/ico1.png')} style={styles.btn2} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={clickHandler}>
        <Image source={require('./img/ico2.jpg')} style={styles.btn3} />
      </TouchableOpacity>
    </View>
  );
}
function Tela3() {
  return (
    <View style={styles.container3}>
      <StatusBar backgroundColor="black" />
      <Image source={require('./img/fundo4.jpg')} style={styles.bkg2} />
      <View style={styles.container4}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.info}>
          <Text style={styles.titulo2}>Assista já!</Text>
        </TouchableOpacity>
        <Text style={styles.sobre}>Disponível em todas as plataformas</Text>
      </View>
      <View style={styles.redes}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.info}>
          <Icon name="spotify" size={45} color="white" style={styles.icon5} />
          <Icon name="youtube" size={45} color="white" style={styles.icon5} />
          <Icons name="netflix" size={45} color="white" style={styles.icon5} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
function Tela4() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: -200}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 2,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }, [offset.y]);

  return (
    <KeyboardAvoidingView style={styles.login}>
      <StatusBar style={{flex: 1}} backgroundColor="#191919" />
      <View style={styles.containerLogo}>
        <Image source={require('./img/fundo2.jpg')} />
      </View>
      <Animated.View
        useNativeDriver="true"
        // eslint-disable-next-line no-sparse-arrays
        style={[
          styles.containerLogin,
          {
            transform: [{translateY: offset.y}],
          },
          ,
        ]}>
        <Text style={styles.textLogin}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="senha"
          onChangeText={() => {}}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnSubmit}
          onPress={clickHandler}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={clickHandler}>
          <Text style={styles.btnCadastro}>Fazer cadastro</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'QI - DevAppI',
            headerStyle: {backgroundColor: '#3D2A83'},
            headerTintColor: '#FFFFFFB2',
          }}
        />
        <Stack.Screen
          name="Tela1"
          component={Tela1}
          options={{
            title: 'Tela 1',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tela2"
          component={Tela2}
          options={{
            title: 'Tela 2 ',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tela3"
          component={Tela3}
          options={{
            title: 'Tela 3',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tela4"
          component={Tela4}
          options={{
            title: 'Tela 4',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  bio: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#97A7AFDA',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#5442A1',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#5442A1',
    paddingBottom: 100,
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  btn: {
    fontSize: 20,
  },
  principal: {
    flex: 1,
    justifyContent: 'space-between',
  },
  div: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3B51B4',
    height: 55,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text2: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  div2: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginBottom: 20,
    marginLeft: 312,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#FF2EB9',
    shadowColor: '#292728',
    shadowOffset: {
      width: 50,
      height: 55,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 10,
  },
  icone1: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  icone2: {
    paddingTop: 22,
    paddingLeft: 2,
    color: '#00000063',
  },
  bkg: {
    width: '100%',
    height: '100%',
  },
  bkg2: {
    width: '100%',
    height: '60%',
  },
  btn2: {
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 50,
    borderRadius: 50,
    backgroundColor: '#462A2AB2',
    borderColor: '#061866A2',
    borderWidth: 5,
  },

  btn3: {
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,
    bottom: 50,
    borderRadius: 50,
    backgroundColor: '#58554CB2',
    borderColor: '#D31B1BD8',
    borderWidth: 5,
  },
  container3: {
    width: '100%',
    height: '100%',
    backgroundColor: '#030303',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container4: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo2: {
    width: '80%',
    height: '100%',
    backgroundColor: '#491818',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    borderColor: 5,
    borderWidth: 5,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    borderRadius: 25,
  },
  sobre: {
    width: '100%',
    height: '30%',
    backgroundColor: '#030202',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingTop: 15,
  },
  redes: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  info: {
    color: 'white',
    flexDirection: 'row',
  },
  icon5: {
    padding: 20,
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFFFFFA4',
    width: '90%',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    borderRadius: 25,
    borderColor: '#22313175',
    borderWidth: 5,
  },
  textLogin: {
    color: '#860F0F',
    fontWeight: 'bold',
    fontSize: 50,
    textShadowColor: 'rgba(260, 241,240, 3.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  btnSubmit: {
    backgroundColor: '#4B2020',
    width: '60%',
    height: 50,
    borderRadius: 25,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 20,
  },
  submitText: {
    color: '#FFF',
    fontSize: 20,
  },
  btnCadastro: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 80,
    color: '#FFF',
  },
});

export default App;
