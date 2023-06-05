import { AppProps } from 'next/app';
import './styles.css';
import { NextUIProvider } from '@nextui-org/react';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <main className="app">
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </main>
  );
}
