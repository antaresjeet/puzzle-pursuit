const URL = "https://puzzle-pursuit.vercel.app";

function generateSiteMap(routes) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
     </url>
     ${routes
       .map((route) => {
         return `
           <url>
               <loc>${`${URL}/${route}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap([]);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
