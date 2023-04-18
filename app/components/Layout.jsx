import {Meta, Scripts, ScrollRestoration} from '@remix-run/react';
import {Seo} from '@shopify/hydrogen';
import Header from './Header';
import Footer from './footer';
import Hero from './Hero';

export const meta = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export default function Layout({content, shop, links}) {
  return (
    <html lang="en">
      <head>
        <Seo />
        <Meta />
        {links}
      </head>
      <body>
        <Hero />
        <Header ShopName={shop}></Header>
        <main>{content}</main>
        <ScrollRestoration />
        <Footer ShopName={shop} />
        <Scripts />
      </body>
    </html>
  );
}
