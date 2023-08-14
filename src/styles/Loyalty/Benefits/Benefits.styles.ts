import {StyleSheet} from 'react-native';

export const benefitsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 60,
    backgroundColor: '#fff',
  },

  img: {
    width: 150,
    height: 150,
    marginBottom: 15,
    marginTop: -50,
  },

  titleSection: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Poppins',
    marginBottom: 60,
    letterSpacing: 0.6,
  },

  pointsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: -10,
  },

  titlePoints: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '800',
    fontFamily: 'Poppins',
    marginBottom: 8,
    letterSpacing: 0.5,
    marginTop: -15,
  },

  tagPoints: {
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },

  cardImg: {
    maxWidth: 350,
    width: 350,
    marginLeft: 1,
    marginRight: 15,
    height: 145,
  },

  scrolls: {
    width: 'auto',
  },
});
