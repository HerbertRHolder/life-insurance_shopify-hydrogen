import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {Seo} from '@shopify/hydrogen';
import Header from './components/Header';
import EmailForm from './components/form';
import CardTop from './components/cards';
import Hero from './components/Hero';
import Footer from './components/footer';

import reset from './styles/reset.css';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import bootstrap from './styles/bootstrap-5.3.0-alpha3-dist/css/bootstrap.min.css';
export const links = () => {
  return [
    {rel: 'stylesheet', href: bootstrap},
    {rel: 'stylesheet', href: reset},
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({context}) {
  const layout = await context.storefront.query(LAYOUT_QUERY);
  return {layout};
}

export default function App() {
  const data = useLoaderData();

  const {name} = data.layout.shop;

  return (
    <html lang="en">
      <head>
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Header ShopName="Life Insurance"></Header>
        <main className="">
          <CardTop>
            <EmailForm />
          </CardTop>
          <Hero />
        </main>
        <ScrollRestoration />
        <Footer ShopName={name} />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
