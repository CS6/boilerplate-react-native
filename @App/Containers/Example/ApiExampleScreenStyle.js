import { ScaledSheet } from 'App/Helpers';
import Fonts from 'App/Theme/Fonts';
import Styles from 'App/Theme/Styles';

export default ScaledSheet.create({
  container: {
    ...Styles.screen.container,
    margin: 30,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  instructions: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  error: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
    color: 'red',
  },
  logoContainer: {
    width: '100%',
    height: 300,
    marginBottom: 25,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
