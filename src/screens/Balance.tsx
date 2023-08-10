/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React, {useState, useContext} from 'react';
import Text from '../../library/components/Text/Text';
import Tag from '../../library/components/atoms/Tag';
import {LineSeparator} from '../components/LineSeparator/LineSeparator';
import TextInput from '../../library/components/atoms/TextInput';
import {balanceStyles} from '../styles/Loyalty/Balance/Balance.styles';
import Disclaimer from '../../library/components/Disclaimer/Disclaimer';
import Button from '../../library/components/Button/Button';
import {AppContext} from '../context/AppContext';
import {TouchableButton} from '../components/TouchableButton/TouchableButton';

export const Balance = () => {
  const {points} = useContext(AppContext);
  const [textInput, setTextInput] = useState('');
  const [buttonPress, setButtonPress] = useState('');

  const handlerPointsToCurrency = (totalPoints: number): string => {
    if (totalPoints >= 10000) {
      const currency = totalPoints - 9000;
      return currency.toLocaleString('en');
    }
    const currency = totalPoints / 10;
    return currency.toLocaleString('en');
  };

  const handlerMaxPointsValidation = (totalPoints: number): number => {
    if (totalPoints >= 20 && totalPoints < 1000) {
      return 1;
    } else if (totalPoints >= 1000 && totalPoints < 10000) {
      return 2;
    } else if (totalPoints >= 10000) {
      return 3;
    }

    return 0;
  };

  const pointsFormatted = points.toLocaleString('en');
  return (
    <View style={balanceStyles.container}>
      <View>
        <View style={balanceStyles.header}>
          <View>
            <Text style={balanceStyles.title}>{pointsFormatted} puntos</Text>
            <Tag
              leftIcon={require('../assets/Benefits/TagIconPoints.png')}
              text={`Valen $${handlerPointsToCurrency(points)}.00`}
              variant="points"
              size="large"
            />
          </View>
          <Image
            style={balanceStyles.icon}
            source={require('../assets/Balance/IconPoint.png')}
          />
        </View>
        <LineSeparator style={{marginTop: 15}} />
        <View style={balanceStyles.containerInfo}>
          <Text style={balanceStyles.text}>
            Escribe el valor de los puntos que quieres cambiar
          </Text>
          {handlerMaxPointsValidation(points) === 2 ? (
            <View style={balanceStyles.buttonsContainer}>
              <TouchableButton
                text="$50"
                desc="500 puntos"
                buttonPress={buttonPress}
                setButtonPress={setButtonPress}
                state="50button"
                backgroundColor="#F5F5F7"
                backgroundColorOnPress="#E0E0FF"
                color="black"
                colorOnPress="#1723D3"
              />
              <TouchableButton
                text="$100"
                desc="1000 puntos"
                buttonPress={buttonPress}
                setButtonPress={setButtonPress}
                state="100button"
                backgroundColor="#F5F5F7"
                backgroundColorOnPress="#E0E0FF"
                color="black"
                colorOnPress="#1723D3"
              />
            </View>
          ) : null}
          {handlerMaxPointsValidation(points) === 3 ? (
            <>
              <View style={balanceStyles.buttonsContainer}>
                <TouchableButton
                  text="$50"
                  desc="500 puntos"
                  buttonPress={buttonPress}
                  setButtonPress={setButtonPress}
                  state="50button"
                  backgroundColor="#F5F5F7"
                  backgroundColorOnPress="#E0E0FF"
                  color="black"
                  colorOnPress="#1723D3"
                />
                <TouchableButton
                  text="$100"
                  desc="1000 puntos"
                  buttonPress={buttonPress}
                  setButtonPress={setButtonPress}
                  state="100button"
                  backgroundColor="#F5F5F7"
                  backgroundColorOnPress="#E0E0FF"
                  color="black"
                  colorOnPress="#1723D3"
                />
              </View>
              <View style={balanceStyles.buttonsContainer}>
                <TouchableButton
                  text="$200"
                  desc="2000 puntos"
                  buttonPress={buttonPress}
                  setButtonPress={setButtonPress}
                  state="200button"
                  backgroundColor="#F5F5F7"
                  backgroundColorOnPress="#E0E0FF"
                  color="black"
                  colorOnPress="#1723D3"
                />
                <TouchableButton
                  text="$500"
                  desc="5000 puntos"
                  buttonPress={buttonPress}
                  setButtonPress={setButtonPress}
                  state="500button"
                  backgroundColor="#F5F5F7"
                  backgroundColorOnPress="#E0E0FF"
                  color="black"
                  colorOnPress="#1723D3"
                />
              </View>
            </>
          ) : null}
          <Text style={[balanceStyles.text, {marginTop: 25}]}>Otro:</Text>
          <TextInput
            placeHolder="Monto en pesos"
            label="Monto en pesos"
            value={textInput}
            editable={
              handlerMaxPointsValidation(points) !== 0 && buttonPress === ''
                ? true
                : false
            }
            onChangeText={setTextInput}
            style={balanceStyles.textInput}
            bottomMessage="El valor minimo que puede cambiar es $20.00"
            inputAccessoryLabel="Listos"
            numericInput={true}
            keyboardType="numeric"
            onTouchStart={() => {
              setButtonPress('');
            }}
          />
        </View>
        {handlerMaxPointsValidation(points) !== 0 ? null : (
          <View style={balanceStyles.alertContainer}>
            <Disclaimer
              variant="warning"
              text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
              backgroundColor="lightBlue"
              textColor="black"
              iconColor="blue"
            />
          </View>
        )}
      </View>
      <View style={balanceStyles.buttonContainer}>
        <Button
          variant="primary"
          onPress={() => {
            console.log('Hello world');
          }}
          disabled={
            handlerMaxPointsValidation(points) !== 0 && buttonPress !== ''
              ? false
              : true
          }
          text="Continuar"
          size="large"
        />
      </View>
    </View>
  );
};