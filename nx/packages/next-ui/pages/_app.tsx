import { AppProps } from 'next/app';
import './styles.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <main className="app">
      <Component {...pageProps} />
    </main>
  );
}
