import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  box: {
    backgroundColor: '#7C6D56',
    width: '40%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 16,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  logo: {
    width: '100%',
    height: 200,
  },
  logoContainer: {
    paddingTop: 24,
    paddingBottom: 24,
  },
});
