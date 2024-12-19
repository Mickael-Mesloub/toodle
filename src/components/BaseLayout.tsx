import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
  locale: string;
}

export default async function BaseLayout({
  children,
  locale,
}: BaseLayoutProps) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className="flex h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
