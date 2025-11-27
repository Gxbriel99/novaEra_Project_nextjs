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
        
        <Menu></Menu>

        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>

        <Footer></Footer>

      </body>
    </html>
  );
}
