'use client'

import './globals.css'

import Menu from "./ui/menu";
import Footer from "./ui/footer";
import { ApolloProvider } from '@apollo/client/react';
import apolloClient from './lib/apollo/apolloClient';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0">

        <ApolloProvider client={apolloClient}>

          <Menu></Menu>
          {children}

          <Footer></Footer>

        </ApolloProvider>

      </body>
    </html>
  );
}
