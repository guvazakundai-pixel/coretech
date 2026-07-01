import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WHATSAPP } from '@/lib/data';

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a href={`https://wa.me/${WHATSAPP}`} className="whatsapp-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>
      </body>
    </html>
  );
}
