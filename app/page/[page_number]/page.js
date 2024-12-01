import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const totalPages = 1000; // Total pages for pagination.
  return Array.from({ length: totalPages }, (_, i) => ({
    page_number: `${i + 1}`, // Convert page number to string for params.
  }));
}

export default async function Page({ params }) {
  const { page_number } = params;
  const page = parseInt(page_number, 10);

  if (isNaN(page) || page < 1 || page > 1000) {
    return <div>Invalid page number</div>; // Optional error handling.
  }

  const fileNumber = Math.ceil(page / 100);
  const dataFile = path.join(process.cwd(), `app/data/webs_${fileNumber}.json`);

  // Read the data file.
  const rawData = fs.readFileSync(dataFile, "utf8");
  const data = JSON.parse(rawData);

  // Determine slice for the current page.
  const start = (page - 1) % 100 * 1000;
  const end = start + 1000;
  const currentPageData = data.slice(start, end);

  return (
    <div>
      <h1>Rankings - Page {page}</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row) => (
            <tr key={row.Rank}>
              <td>{row.Rank}</td>
              <td><a href={`/domain/${row.Domain}`}>{row.Domain}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
