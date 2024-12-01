import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {pages.map((page) => (
        <Link key={page} href={`/page/${page}`}>
          {page === currentPage ? (
            <span style={{ margin: "0 5px", fontWeight: "bold" }}>{page}</span>
          ) : (
            <span style={{ margin: "0 5px" }}>{page}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
