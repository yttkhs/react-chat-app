import React from 'react';
import { RecoilRoot } from 'recoil';
import ProviderAuth from '../providers/ProviderAuth';
import LayoutDefault from '../components/templates/LayoutDefault';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ProviderAuth>
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      </ProviderAuth>
    </RecoilRoot>
  );
}

export default MyApp;
