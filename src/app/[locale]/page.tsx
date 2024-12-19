import PageLayout from "@/components/PageLayout";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface IndexPageProps {
  params: { locale: string };
}

export default function IndexPage({ params: { locale } }: IndexPageProps) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[590px]">{t("description")} </p>
    </PageLayout>
  );
}
