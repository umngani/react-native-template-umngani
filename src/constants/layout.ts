import { Dimensions } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

// import colors from './colors';

const { width, height } = Dimensions.get('window');

const getScale = (smallScreenScaling = 0.95, limitScale = true) => {
  let scale = (width / 414 + height / 812) / 2;
  if (scale > 1 && limitScale) {
    scale = 1;
  } else if (scale < 1) {
    scale *= smallScreenScaling;
  }
  return scale;
};

const shadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.08,
  shadowRadius: 8,
  elevation: 3,
};

const highShadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 7 },
  shadowOpacity: 0.4,
  shadowRadius: 8,

  elevation: 15,
};

const screenPadding = getScale() * 28;

export default {
  screenWidth: width,
  screenHeight: height,
  hitSlop: { top: 10, left: 10, right: 10, bottom: 10 },
  largeHitSlop: { top: 15, left: 15, right: 15, bottom: 15 },
  scale: getScale,
  statusBarHeight: getStatusBarHeight(),
  bottomSpace: getBottomSpace(),
  highShadow,
  screenPadding,
  tabBarHeight: getBottomSpace() + getScale() * 64,
  shadow,
};
