import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>My contacts</h1>
      <button type="button">oi</button>
    </ThemeProvider>
  );
}

export default App;
