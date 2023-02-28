import {StyleSheet} from 'react-native';
const PRIMARY_COLOR = '#8d9194';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  buttonArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  box: {
    width: '40%',
    height: 150,
    aspectRatio: 1,
    marginVertical: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 24,
  },
  text: {
    color: PRIMARY_COLOR,
    textTransform: 'uppercase',
    fontWeight: 300,
  },
  input: {
    borderColor: '#8d919400',
    borderBottomColor: PRIMARY_COLOR,
    height: 100,
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  output: {
    borderColor: '#8d919400',
    borderBottomColor: PRIMARY_COLOR,
    height: 100,
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  outputText: {
    fontSize: 32,
    paddingBottom: 10,
    color: PRIMARY_COLOR,
  },
  inputText: {
    fontSize: 24,
    paddingBottom: 10,
    color: PRIMARY_COLOR,
  },
  title: {
    fontSize: 30,
    color: PRIMARY_COLOR,
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  titleContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
