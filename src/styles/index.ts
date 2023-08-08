import {
  DarkTheme as SpinPlusDarkTheme,
  LightTheme as SpinPlusLightTheme,
} from '../../library/styles/spinplus';
import {
  DarkTheme as TenderosDarkTheme,
  LightTheme as TenderosLightTheme,
} from '../../library/styles/tenderos';
import * as SpinPlusTypography from '../../library/styles/spinplus/Typography';
import * as TenderosTypography from '../../library/styles/tenderos/Typography';
import {ThemeVariant} from '../../library/themes/types';
import {ThemePaletteTypes} from './types';

export const getColors = (isLightTheme: boolean, variant: ThemeVariant) => {
  const themeMapping = {
    [ThemeVariant.SpinPlus]: {
      [ThemePaletteTypes.dark]: SpinPlusDarkTheme,
      [ThemePaletteTypes.light]: SpinPlusLightTheme,
    },
    [ThemeVariant.Tenderos]: {
      [ThemePaletteTypes.dark]: TenderosDarkTheme,
      [ThemePaletteTypes.light]: TenderosLightTheme,
    },
  };

  return themeMapping[variant][
    isLightTheme ? ThemePaletteTypes.light : ThemePaletteTypes.dark
  ];
};

export const getTypography = (variant: ThemeVariant) => {
  const typographyMapping = {
    [ThemeVariant.SpinPlus]: SpinPlusTypography,
    [ThemeVariant.Tenderos]: TenderosTypography,
  };

  return typographyMapping[variant];
};
