import './globals.css';

export const metadata = {
  title: 'Contact Me App',
  description: 'A simple contact form with MongoDB and Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
