import { limitWords } from "@/utils/limitwords";
import Image from "next/image";
import Link from "next/link";
async function getData() {
  const res = await fetch(
    `https://sufyanmaan.com/wp-json/wp/v2/posts?per_page=10`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const posts = await getData();
  return (
    <main className="container mx-auto px-4">
      <div className="my-8 flex flex-col items-center justify-center"></div>

      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="grid gap-4">
            {posts.map((post: any) => (
              <Link href={`/${post.slug}`}>
              <div className="flex bg-white shadow-lg  gap-4 items-start">
                <div>
                  <Image
                    className="object-cover max-w-[350px] max-h-[280px]"
                    width="400"
                    height="400"
                    src={post.x_featured_media_large}
                    alt={post.title.rendered}
                  />
                </div>
                <div className="flex flex-col justify-center h-full gap-3">
                  
                  <h4 className="text-2xl font-bold">{post.title.rendered}</h4>
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
                    <div
                      className="flex gap-2 items-center" 
                    >
                      
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
                  <div
                
                  >
                    <p dangerouslySetInnerHTML={{__html:limitWords(post.excerpt.rendered,25) }}></p>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-4">

          SIDEBAR WILL GO HERE
        </div>
      </section>
    </main>
  );
}
