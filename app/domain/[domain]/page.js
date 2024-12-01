import fs from "fs";
import path from "path";

export default async function DomainPage({ params }) {
  const { domain } = params;

  let domainData = null;

  // Search for the domain in all JSON files
  for (let i = 1; i <= 10; i++) {
    const dataFile = path.join(process.cwd(), `/app/data/webs_${i}.json`);
    const fileData = JSON.parse(fs.readFileSync(dataFile, "utf8"));

    domainData = fileData.find((row) => row.Domain === domain);
    if (domainData) break; // Stop searching once found
  }

  if (!domainData) {
    return <div>Domain not found</div>; // Handle case where domain is not found
  }

  return (
    <div>
      <h1>{domainData.Domain}</h1>
      <p>Rank: {domainData.Rank}</p>
      <p>Data 1: {domainData.data1}</p>
      <p>Data 2: {domainData.data2}</p>
      <p>Data 3: {domainData.data3}</p>
    </div>
  );
}
