import 'styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import Layout from 'containers/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
