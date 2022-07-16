import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {normalize} from '../../constants/helper';

export default StyleSheet.create({
  container: {
    height: normalize(70),
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallTxt: {
    fontSize: normalize(12),
    color: colors.greyText,
    fontWeight: '500',
  },
  bigTxt: {
    fontSize: normalize(20),
    color: colors.text,
    fontWeight: 'bold',
  },
});
