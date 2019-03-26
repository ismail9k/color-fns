import { hexToRgb } from './hexToRgb';
import { hslToRgb } from './hslToRgb';
import { hsvToRgb } from './hsvToRgb';
import { parseCmyk } from './parseCmyk';
import { rgbToCmyk } from './rgbToCmyk';
import { ICmykColor } from './types/cmyk';
import { whichModel } from './whichModel';

export function toCmyk (color: string | null): ICmykColor | null {
  const model = whichModel(color);

  if (model === 'hex') {
    return rgbToCmyk(hexToRgb(color));
  }

  if (model === 'hsl') {
    return rgbToCmyk(hslToRgb(color));
  }

  if (model === 'hsv') {
    return rgbToCmyk(hsvToRgb(color));
  }

  if (model === 'rgb') {
    return rgbToCmyk(color);
  }

  if (model === 'cmyk' && typeof color === 'string') {
    return parseCmyk(color);
  }

  return null;
}
