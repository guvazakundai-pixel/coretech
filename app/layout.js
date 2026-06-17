import './globals.css';

export const metadata = {
  title: 'CoreTech | Innovative Technology Solutions',
  description: 'CoreTech - Delivering cutting-edge technology solutions for businesses across Zimbabwe and beyond. IT Infrastructure, Software Development, Cybersecurity, Cloud Solutions.',
  keywords: 'CoreTech, IT solutions, technology, Zimbabwe, software development, cybersecurity, cloud solutions, digital transformation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}