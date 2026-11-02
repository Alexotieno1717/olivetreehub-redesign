// Import Swiper styles
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import 'swiper/css';
import 'react-whatsapp-widget/dist/index.css';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  companyName: string;
}

const WhatsAppWidget = dynamic<WhatsAppWidgetProps>(
  () => import('react-whatsapp-widget').then((module) => module.WhatsAppWidget as ComponentType<WhatsAppWidgetProps>),
  { ssr: false },
);

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <main>
          <Component {...pageProps} />
          <WhatsAppWidget phoneNumber="254110090038" companyName='Olive Tree Media Limited' />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
