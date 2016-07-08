import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#e72f8d',
    padding: 10
  },
  headerView: {
    marginTop: 100,
  },
  welcome: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff'
  },
  instructions: {
    marginBottom: 5,
    fontSize: 13,
    color: '#ffffff'
  },
  btn: {
    borderRadius: 3,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7'
  },
  btnText: {
    color: '#fff',
    fontWeight: '600'
  },
  camera: {
    height: 200,
    alignItems: 'center',
  },
  inputCodeFieldView: {

  },
  inputCodeField: {
    height: 50,
    borderColor: '#ffffff',
    color: '#ffffff',
    fontWeight: '800',
    borderWidth: 1,
    width: 350,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 10
  },
  logo: {
    height: 53,
    width: 200
  },
  banana: {
    height: 256,
    width: 256
  },
  successView: {
    flex:1,
    alignItems: 'flex-start',
    backgroundColor: '#e72f8d',
    padding: 10
  }
});

export default styles
