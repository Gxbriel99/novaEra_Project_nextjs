import './globals.css'

import Menu from "./ui/menu";
import Footer from "./ui/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0">
        
        <Menu></Menu>

        {children}

        <Footer></Footer>

      </body>
    </html>
  );
}
