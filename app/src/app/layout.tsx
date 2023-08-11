import '@/scss/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Albedya',
  description: "Albedya représente le future de l'ingénierie climatique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
