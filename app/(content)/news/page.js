// import { DUMMY_NEWS } from '@/dummy-news';
// import { useEffect, useState } from "react";
import NewsList from "@/components/news-list";
import { getAllNews } from '@/lib/news';

export default async function NewsPage() {
  const news = getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
