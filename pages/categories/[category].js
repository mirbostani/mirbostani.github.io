import Layout from "../../components/layout";
import Posts from "../../components/posts";
import { getPostsData, getAllPostCategories } from "../../lib/posts";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Category({
  category,
  postsData,
  categories,
  darkMode,
}) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Layout title={t(category)} categories={categories} darkMode={darkMode}>
      <h1 className="text-4xl font-extrabold mb-8">{t(category)}</h1>
      <Posts postsData={postsData} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const categories = getAllPostCategories();
  return {
    paths: categories,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsData = getPostsData({
    page: 1,
    limit: 10,
    category: params.category,
  });
  const categories = getAllPostCategories();
  return {
    props: {
      category: params.category,
      postsData,
      categories,
    },
  };
}
