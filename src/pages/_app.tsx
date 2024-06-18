import type { AppProps } from "next/app";
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/components/Theme";
import {CssBaseline} from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
}
