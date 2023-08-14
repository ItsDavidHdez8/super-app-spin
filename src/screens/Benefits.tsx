import {Image, View, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import Text from '../../library/components/Text/Text';
import {benefitsStyles} from '../styles/Loyalty/Benefits/Benefits.styles';
import StackedCardGrid from '../../library/components/GridView/StackedCardGrid';
import Tag from '../../library/components/atoms/Tag';
import {CardWithInteraction} from '../components/CardWithInteraction/CardWithInteraction';
import OxxoLogo from '../assets/Benefits/OxxoLogo';
import {CardBenefit} from '../components/CardBenefit/CardBenefit';
import {CardWithoutInteraction} from '../components/CardWithoutInteraction/CardWithoutInteraction';
import {AppContext} from '../context/AppContext';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {HomeNavigationParamsList, RootStackParamsList} from '../interfaces/navigation';
import {IMAGES} from '../utils/constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigationParamsList, "Beneficios">,
  StackScreenProps<RootStackParamsList>
>;

export const Benefits = ({route, navigation} : Props) => {
  const {appState} = useContext(AppContext);

  console.log(appState);
  const value: string = '156.00';

  return (
    <ScrollView>
      <View style={benefitsStyles.container}>
        <Text style={benefitsStyles.titleSection}>Beneficios</Text>
        <View style={benefitsStyles.pointsContainer}>
          <View>
            <Text style={benefitsStyles.titlePoints}>10,657 puntos</Text>
            <View style={benefitsStyles.tagPoints}>
              <Tag
                leftIcon={require('../assets/Benefits/TagIconPoints.png')}
                text={`Valen $${value}`}
                variant="points"
                size="large"
              />
            </View>
          </View>
          <View>
            <Image
              source={require('../assets/Benefits/SpinPremia.png')}
              style={benefitsStyles.img}
            />
          </View>
        </View>
        <View>
          <StackedCardGrid
            numberOfColumns={2}
            data={[
              {
                title: 'Consulta tu historial',
                icon: (
                  <Image
                    source={require('../assets/Benefits/History.jpg')}
                    style={{width: 75, height: 75}}
                  />
                ),
                onPress: () => navigation.navigate("MovemenHistory"),
              },
              {
                title: 'Cambia tus puntos',
                icon: (
                  <Image
                    source={require('../assets/Benefits/Points.jpg')}
                    style={{width: 75, height: 75}}
                  />
                ),
                onPress: () => navigation.navigate('ChangePoints'),
              },
            ]}
          />
        </View>
        <CardBenefit
          images={IMAGES}
          title="Acomula productos"
          desc="Llévate tus favoritos de regalo al juntar tus sellos"
          showMore={true}>
          <ScrollView horizontal={true} style={benefitsStyles.scrolls}>
            <CardWithInteraction
              img={IMAGES.product}
              text="Ya puedes cambiar tu Casillero del Diablo Belight de 750 ml"
              icon={<OxxoLogo size={36} />}
              imgInteractive="check"
              count={5}
              total={5}
            />
            <CardWithInteraction
              img={IMAGES.product}
              text="Ya puedes cambiar tu Casillero del Diablo Belight de 750 ml"
              icon={<OxxoLogo size={36} />}
              imgInteractive="check"
              count={5}
              total={5}
            />
          </ScrollView>
        </CardBenefit>
        <CardBenefit
          images={IMAGES}
          title="Gana más puntos"
          desc="Elige productos participantes y en el total de tu compra gana puntos
            adicionales"
          showMore={true}>
          <ScrollView horizontal={true}>
            <CardWithoutInteraction
              icon={<OxxoLogo size={36} />}
              points={120}
              img={IMAGES.product2}
              title="Galletas principe marinela"
              date="01 / 03 / 2023"
            />
            <CardWithoutInteraction
              icon={<OxxoLogo size={36} />}
              points={320}
              img={IMAGES.product3}
              title="Regio Luxury 18 rollos"
              date="01 / 03 / 2023"
            />
          </ScrollView>
        </CardBenefit>
        <View
          style={[
            benefitsStyles.lineSeparator,
            {marginBottom: 5, marginTop: 10},
          ]}
        />
        <CardBenefit
          images={IMAGES}
          title="Suma al comprar"
          desc="Llega a la meta al acumular tus compras y obtén recompensas de regalo"
          showMore={true}>
          <ScrollView horizontal={true} style={benefitsStyles.scrolls}>
            <CardWithInteraction
              img={IMAGES.product}
              text="Ya puedes cambiar tu Casillero del Diablo Belight de 750 ml"
              icon={<OxxoLogo size={36} />}
              imgInteractive="line"
              count={50}
              total={50}
              unit="currency"
            />
            <CardWithInteraction
              img={IMAGES.product}
              text="Ya puedes cambiar tu Casillero del Diablo Belight de 750 ml"
              icon={<OxxoLogo size={36} />}
              imgInteractive="line"
              count={50}
              total={50}
              unit="currency"
            />
          </ScrollView>
        </CardBenefit>
        <View style={benefitsStyles.lineSeparator} />
        <View>
          <ScrollView horizontal={true} style={benefitsStyles.scrolls}>
            <Image
              style={benefitsStyles.cardImg}
              source={require('../assets/Benefits/SpinPremiaCard.jpg')}
            />
            <Image
              style={benefitsStyles.cardImg}
              source={require('../assets/Benefits/SpinPremiaCard.jpg')}
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};
