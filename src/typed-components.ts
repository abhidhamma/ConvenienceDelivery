import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface IThemeInterface {
  blueColor: string;
  greyColor: string;
  cyanColor: string;
  blackColor: string;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
