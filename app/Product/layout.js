import Header from "@/Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <h1>welcome to product page</h1>
        {children}
      </body>
    </html>
  );
}
