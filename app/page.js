import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Ranking Website</h1>
      <p>
        Explore rankings and data insights. Start navigating through millions of records categorized by rank and domain.
      </p>
      <p>
        Ready to explore? Start from <Link href="/page/1">Page 1</Link>.
      </p>
    </div>
  );
}
