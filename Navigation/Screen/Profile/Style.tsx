// ProfileScreenStyles.js

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 16,
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  heading: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    // marginTop:-10,
  },
  innterContainer: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 12,
    // color: 'black',
    fontWeight: '500',
  },
  value: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  bio: {
    marginVertical: 10,
    marginHorizontal: 7,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    // flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  friends: {},

  contentContainmer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical:5,
   
  },
 
});

export default styles;
