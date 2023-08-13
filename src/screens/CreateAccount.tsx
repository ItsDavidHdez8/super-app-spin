import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../library/components/Text/Text';
import Otp from '../../library/components/Otp';
import Button from '../../library/components/Button/Button';

const CreateAccount = () => {
  const [optText, setOtpText] = useState('');
  const [, setAndroidHash] = useState<string | undefined>('');
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer: boolean | NodeJS.Timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  console.log(optText);
  return (
    <View style={styles.container}>
      <View>
        <Text key={'otp-text-with-error'} style={styles.title}>
          Ingresa el código de verificación enviado a tu número de celular
          5534710866
        </Text>
        <View style={styles.otp}>
          <Otp androidHash={setAndroidHash} onOtpChange={setOtpText} />
        </View>
        <Text style={styles.description}>
          Reenviar código en {counter} segundos
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            variant="primary"
            onPress={() => {
              console.log('Hello world');
            }}
            text="Continuar"
            size="large"
            disabled={optText.length < 4 ? true : false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    paddingHorizontal: 15,
  },

  otp: {
    marginTop: 20,
  },

  description: {
    fontSize: 16,
    marginTop: 105,
    textAlign: 'center',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingHorizontal: 15,
    height: '60%',
    marginTop: 90,
  },
});

export default CreateAccount;
