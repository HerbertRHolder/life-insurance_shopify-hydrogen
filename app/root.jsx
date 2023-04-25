import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {Seo, Image} from '@shopify/hydrogen';
import Section from './components/Section';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroSection from './components/HeroSection';
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
  const rootQuery = data.query;
  const {name} = data.query.shop;
  const prod = data.query.products.edges[0].node;
  // console.log('metaobjects: ', rootQuery.metaobjects.edges[0].node.text.line);

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
            <HeroSection>
              <Image
                alt={`${prod.description}`}
                data={prod.featuredImage}
                key={prod.id}
                // width={200}
                className="img-fluid img-width position-absolute"
              />
            </HeroSection>
          </Hero>
          <Section QUERY={rootQuery}></Section>
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
  metaobjects (type: "website_details", first: 3) {
    edges {
      node {
        id
        title: field (key: "title") {
          name: value
        }
        text: field (key: "landing_page") {
            line: value
          }
        img: field (key: "info_image"){
          reference {
            ...on MediaImage {
              image {
                url
              }
            }
          }      
        }
      }
    }
  }
}
`;
