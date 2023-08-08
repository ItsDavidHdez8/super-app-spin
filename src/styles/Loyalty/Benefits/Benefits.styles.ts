import {StyleSheet} from 'react-native';

export const benefitsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },

  titleContainerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },

  titleSection: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Poppins',
  },

  pointsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  titlePoints: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
});
