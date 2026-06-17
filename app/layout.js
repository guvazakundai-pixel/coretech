import './globals.css';

export const metadata = {
  title: 'CoreTech | Innovative Technology Solutions',
  description: 'CoreTech - Delivering cutting-edge technology solutions for businesses across Zimbabwe and beyond.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}