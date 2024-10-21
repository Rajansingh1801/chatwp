import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Mainscreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOpenWhatsApp = async () => {
    const msg = 'type something';
    const phoneWithCountryCode = phoneNumber;

    const mobile =
      Platform.OS === 'ios' ? phoneWithCountryCode : `+${phoneWithCountryCode}`;

    if (mobile) {
      if (msg) {
        const url = `whatsapp://send?text=${encodeURIComponent(
          msg,
        )}&phone=${encodeURIComponent(mobile)}`;
        try {
          await Linking.openURL(url);
          console.log('WhatsApp Opened');
        } catch (error) {
          Alert.alert(
            'Error',
            'Make sure WhatsApp is installed on your device',
          );
        }
      } else {
        Alert.alert('Error', 'Please insert a message to send');
      }
    } else {
      Alert.alert('Error', 'Please insert a mobile number');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img.jpg')}
        resizeMode="cover"
        color="white"
        style={styles.image}>
        <Text style={styles.h1}>WhatsApp Chat</Text>
        <View style={{width: '90%'}}>
          <KeyboardAvoidingView>
            <TextInput
              placeholder="Enter Mobile Number"
              style={styles.input}
              keyboardType="phone-pad"
              placeholderTextColor="black"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </KeyboardAvoidingView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={[styles.btn]} onPress={handleOpenWhatsApp}>
              <Text style={styles.txt}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Mainscreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  h1: {
    marginBottom: 70,
    fontSize: 40,
    color: 'white',
    fontWeight: '800',
  },
  image: {
    height: '100%',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderBottomColor: '#C7B8BF',
    borderBottomWidth: 2,
    padding: 20,
    height: 60,
    marginBottom: 50,
    borderRadius: 8,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'LibreBaskerville-Bold',
    borderColor: 'black',
    fontSize: 20,
  },
  btn: {
    margin: 'auto',
    backgroundColor: '#45474B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 70,
    height: 50,
    alignSelf: 'center',
    marginTop: 8,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gray',
  },
  txt: {
    fontWeight: '600',
    color: 'white',
  },
});
