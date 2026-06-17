import './globals.css';

export const metadata = {
  title: 'CoreTech | Premium Technology Store — Laptops, Desktops, Gaming PCs & IT Solutions in Zimbabwe',
  description: 'Shop premium laptops, desktops, gaming PCs, printers, networking equipment, and accessories at CoreTech Zimbabwe. Genuine products, manufacturer warranty, competitive pricing, and expert support.',
  keywords: 'CoreTech, laptops Zimbabwe, desktops, gaming PCs, printers, networking, IT solutions, technology store, HP, Dell, Lenovo, ASUS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}