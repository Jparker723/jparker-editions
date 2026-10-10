import './globals.css';

export const metadata = {
  title: 'JParker Editions | Fine Art & Architectural Photography',
  description: 'Museum-grade limited edition fine art prints and architectural monochromes by JParker.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-100 antialiased">{children}</body>
    </html>
  );
}
