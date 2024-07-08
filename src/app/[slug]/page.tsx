import Image from "next/image";

async function getPost(slug: any) {
  const res = await fetch(
    `https://sufyanmaan.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const revalidate = 3600; // revalidate the data at most every hour

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = await getPost(slug);
  const post = postData[0];

  return (
    <>
      <section className="bg-gray-200 py-32 mx-auto  ">
        <div className="container px-8 mx-auto">
          <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          ></p>
          <div className="flex gap-2 text-sm flex-wrap  ">
            <div className="flex gap-2  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4 flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                ></path>
              </svg>
              {post.x_date}
            </div>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 h-4 w-4 flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                ></path>
              </svg>
              {post.x_categories}
            </div>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-8">
        <section className="grid grid-cols-12 mt-8">
          <div className="col-span-8">
            <Image
              width="1024"
              height="1080"
              src={post.x_featured_media_large}
              alt={post.title.rendered}
            />

<div className="post-content">
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}/>
          </div>
          </div>
          <div className="col-span-4"></div>

          
        </section>
      </main>
    </>
  );
  // ...
}
