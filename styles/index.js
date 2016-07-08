import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  headerView: {
    marginTop: 100,
  },
  welcome: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  instructions: {
    marginBottom: 5,
    fontSize: 13
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
    borderColor: '#cccccc',
    borderWidth: 1,
    width: 350,
    paddingLeft: 12,
    paddingRight: 12
  },
  logo: {
    height: 52,
    width: 82
  }
});

export default styles
