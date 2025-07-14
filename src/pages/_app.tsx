import type { AppProps } from "next/app";
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/components/Theme";
import {CssBaseline} from "@mui/material";
import { appWithTranslation } from 'next-i18next';
import '../../i18n';

function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
}

export default appWithTranslation(App);