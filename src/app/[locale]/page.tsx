import { use } from "react";
import PageLayout from "@/components/PageLayout";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";

interface IndexPageProps {
  params: Promise<{ locale: string }>;
}

export default function IndexPage(props: IndexPageProps) {
  const params = use(props.params);

  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[590px]">{t("description")} </p>
      <Link href="/[locale]/about" as={`/${locale}/about`}>
        {t("link")}
      </Link>
    </PageLayout>
  );
}
