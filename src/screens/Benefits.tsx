import {Image, View, StyleSheet, ScrollView} from 'react-native';
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

export const Benefits = () => {
  const {appState} = useContext(AppContext);

  console.log(appState);
  const value: string = '156.00';

  const images = {
    product: require('../assets/Benefits/Product.jpg'),
    product2: require('../assets/Benefits/Product2.png'),
    product3: require('../assets/Benefits/Product3.jpg'),
  };

  return (
    <ScrollView>
      <View style={benefitsStyles.container}>
        <Text style={benefitsStyles.titleSection}>Beneficios</Text>
        <View style={benefitsStyles.pointsContainer}>
          <View>
            <Text style={benefitsStyles.titlePoints}>10,657 puntos</Text>
            <Tag text={`Valen $${value}`} variant="points" size="large" />
          </View>
          <View>
            <Image
              source={require('../assets/Benefits/SpinPremia.png')}
              style={{width: 75, height: 75}}
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
                onPress: () => console.log('hello word'),
              },
              {
                title: 'Cambia tus puntos',
                icon: (
                  <Image
                    source={require('../assets/Benefits/Points.jpg')}
                    style={{width: 75, height: 75}}
                  />
                ),
                onPress: () => console.log('hello word'),
              },
            ]}
          />
        </View>
        <CardBenefit
          images={images}
          title="Acomula productos"
          desc="Llévate tus favoritos de regalo al juntar tus sellos"
          showMore={true}>
          <ScrollView horizontal={true}>
            <CardWithInteraction
              img={images.product}
              text="Ya puedes cambiar tu Casillero del Diablo Belight de 750 ml"
              icon={<OxxoLogo size={36} />}
              imgInteractive="check"
              count={5}
              total={5}
            />
            <CardWithInteraction
              img={images.product}
              text="Ya puedes cambiar tu Casillero del Diablo Belight de 750 ml"
              icon={<OxxoLogo size={36} />}
              imgInteractive="check"
              count={5}
              total={5}
            />
          </ScrollView>
        </CardBenefit>
        <View>
          <View style={benefitsStyles.titleContainerSection}>
            <Text style={benefitsStyles.titleSection}>Gana más puntos</Text>
            <Text variant="text-link-one" style={{fontWeight: '600'}}>
              Mostrar más
            </Text>
          </View>
          <Text variant="content-one-medium">
            Elige productos participantes y en el total de tu compra gana puntos
            adicionales
          </Text>
          <ScrollView horizontal={true}>
            <CardWithoutInteraction
              icon={<OxxoLogo size={36} />}
              points={120}
              img={images.product2}
              title="Galletas principe marinela"
              date="01 / 03 / 2023"
            />
            <CardWithoutInteraction
              icon={<OxxoLogo size={36} />}
              points={320}
              img={images.product3}
              title="Regio Luxury 18 rollos"
              date="01 / 03 / 2023"
            />
          </ScrollView>
        </View>
        <CardBenefit
          images={images}
          title="Suma al comprar"
          desc="Llega a la meta al acumular tus compras y obtén recompensas de regalo"
          showMore={true}>
          <ScrollView horizontal={true}>
            <CardWithInteraction
              img={images.product}
              text="Ya puedes cambiar tu Casillero del Diablo Belight de 750 ml"
              icon={<OxxoLogo size={36} />}
              imgInteractive="line"
              count={50}
              total={50}
              unit="currency"
            />
            <CardWithInteraction
              img={images.product}
              text="Ya puedes cambiar tu Casillero del Diablo Belight de 750 ml"
              icon={<OxxoLogo size={36} />}
              imgInteractive="line"
              count={50}
              total={50}
              unit="currency"
            />
          </ScrollView>
        </CardBenefit>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 200,
    width: 300,
    padding: 10,
  },
});
