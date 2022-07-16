import {Dimensions, PixelRatio} from 'react-native';

// Device Height and Width
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

// Get responsive device size
export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
