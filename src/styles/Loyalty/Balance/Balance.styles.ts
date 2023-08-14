import {StyleSheet} from 'react-native';

export const balanceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: -35,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    marginBottom: 10,
    marginRight: 10,
  },

  textInput: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    marginTop: 16,
  },

  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },

  icon: {
    marginTop: -4,
    marginLeft: -3,
  },

  alertContainer: {
    marginTop: 10,
  },

  containerInfo: {
    marginTop: -10,
  },

  buttonContainer: {
    marginBottom: 25,
    flexDirection: 'column-reverse',
    height: 'auto',
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '95%',
    maxWidth: '95%',
  },

  button: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
    height: 45,
    justifyContent: 'center',
  },

  titlePoints: {
    marginTop: 5,
    color: '#69698B',
  },
});
