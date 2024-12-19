import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Locale, routing } from "@/i18n/routing";
import BaseLayout from "@/components/BaseLayout";

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<LocaleLayoutProps, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
