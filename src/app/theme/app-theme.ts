import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

const bluePrimaryPalette = Lara.primitive?.blue ?? {};
export const NAVY_SURFACE_PALETTE = {
    0: '#ffffff',
    50: '#f3f7fd',
    100: '#e4ecf8',
    200: '#d0def0',
    300: '#b3c5e1',
    400: '#8da0c2',
    500: '#647a9f',
    600: '#465c81',
    700: '#314366',
    800: '#1d2f4d',
    900: '#111c30',
    950: '#09111f'
} as const;

export const APP_THEME_NAME = 'Lara';
export const APP_PRIMARY_COLOR = 'blue';
export const APP_SURFACE_COLOR = 'navy';

export const AppThemePreset = definePreset(Lara, {
    semantic: {
        primary: bluePrimaryPalette,
        colorScheme: {
            light: {
                surface: NAVY_SURFACE_PALETTE,
                primary: {
                    color: '{primary.500}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.700}'
                },
                highlight: {
                    background: '{primary.50}',
                    focusBackground: '{primary.100}',
                    color: '{primary.700}',
                    focusColor: '{primary.800}'
                }
            },
            dark: {
                surface: NAVY_SURFACE_PALETTE,
                primary: {
                    color: '{primary.400}',
                    contrastColor: '{surface.900}',
                    hoverColor: '{primary.300}',
                    activeColor: '{primary.200}'
                },
                highlight: {
                    background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                    focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});
