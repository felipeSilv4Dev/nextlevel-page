import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <main>
      <header>
        <h1>NewsPage</h1>
      </header>

      <nav>
        <ul className="news-list">
          {DUMMY_NEWS.map((newsItems) => (
            <li key={newsItems.id}>
              <Link href={`/news/${newsItems.slug}`}>
                <img
                  src={`/images/news/${newsItems.image}`}
                  alt={newsItems.title}
                />
                <span>{newsItems.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
