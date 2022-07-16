import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {normalize} from '../../constants/helper';

export default StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.theme,
    borderRadius: normalize(16),
    marginVertical: normalize(10),
    paddingBottom: normalize(20),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  video: {
    width: '100%',
    height: normalize(170),
    borderTopRightRadius: normalize(16),
    borderTopLeftRadius: normalize(16),
    overflow: 'hidden',
  },
  logo: {
    position: 'absolute',
    bottom: normalize(10),
    left: normalize(10),
    height: normalize(35),
    width: normalize(35),
  },
  muteContainer: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(7),
    borderRadius: normalize(6),
    backgroundColor: 'grey',
    position: 'absolute',
    bottom: normalize(10),
    right: normalize(10),
  },
  title: {
    width: '90%',
    alignSelf: 'center',
    fontSize: normalize(11),
    color: colors.greyText,
    fontWeight: '600',
    marginTop: normalize(10),
  },
  text: {
    width: '90%',
    alignSelf: 'center',
    fontSize: normalize(16),
    color: colors.text,
    fontWeight: 'bold',
    marginTop: normalize(5),
  },
  row: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(15),
  },
  iconContainer: {
    width: normalize(70),
    height: normalize(50),
    borderRadius: normalize(6),
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icnText: {
    fontSize: normalize(8),
    color: colors.text,
    textAlign: 'center',
    marginTop: normalize(3),
  },
});
