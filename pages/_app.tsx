/* eslint-disable prettier/prettier */
// pages/_app.tsx
import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
