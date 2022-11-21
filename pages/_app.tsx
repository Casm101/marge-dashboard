import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navigation } from '../components';

/* Import of user configuration */
import DashboardConfig from "../config.json" assert { type: "json" };


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation
        logo={DashboardConfig.logo}
        title={DashboardConfig.title}
        subtitle={DashboardConfig.subtitle}
        pages={DashboardConfig.pages}
      />
      <Component data={DashboardConfig.pages} {...pageProps} />
    </>
  );
}
