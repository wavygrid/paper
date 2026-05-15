import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Geist } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Paperlogic | Turn Archives into Instant Intelligence',
  description: 'Enterprise digitization and AI extraction platform.',
  icons: {
    icon: [
      { url: '/paperlogic_favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/paperlogic_icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${geist.variable} antialiased scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans bg-white text-zinc-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
