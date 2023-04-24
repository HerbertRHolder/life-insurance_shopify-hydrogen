import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {Seo} from '@shopify/hydrogen';
import Header from './components/Header';
// import EmailForm from './components/form';
// import {CardColumn} from './components/cards';
import Hero from './components/Hero';
import TwoColumnSection from './components/TwoColumnSection';
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
  const query = await context.storefront.query(QUERY);
  return {query};
}

export default function App() {
  const data = useLoaderData();
  // .productConnection.productEdge[0].product.id;
  const {name} = data.query.shop;
  const prod = data.query.products.edges[0].node;
  // console.log('product:', prod);

  return (
    <html lang="en">
      <head>
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Header ShopName={name}></Header>
        <main className="">
          <Hero>
            <TwoColumnSection product={prod}></TwoColumnSection>
          </Hero>
        </main>
        <ScrollRestoration />
        <Footer ShopName={name} />
        <Scripts />
      </body>
    </html>
  );
}

const QUERY = `#graphql
{
  shop {
    name
  }
  products(first: 1, reverse: true) {
    edges {
      node {
        id
        description
        featuredImage {
          id
          url
          width
          height
        }
      }
    }
  }
}
`;
