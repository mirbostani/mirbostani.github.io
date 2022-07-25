import Post from "./post";

export default function Posts({ postsData }) {
  // const firstPosts = postsData.slice(0, 1);
  // const secondPosts = postsData.slice(1, 3);
  // const thirdPosts = postsData.slice(3);
  const firstPosts = []
  const secondPosts = []
  const thirdPosts = postsData;
  return (
    <div>
      <section className="flex flex-col">
        {firstPosts.length > 0 &&
          firstPosts.map(
            ({ slug, category, title, description, date, author, cover, tags, readTime }) => {
              return (
                <div key={slug}>
                  <Post
                    key={slug}
                    slug={slug}
                    category={category}
                    title={title}
                    description={description}
                    date={date}
                    author={author}
                    cover={cover}
                    tags={tags}
                    readTime={readTime}
                    type={0}
                  />
                </div>
              );
            }
          )}
      </section>
      <section className="flex flex-col lg:flex-row lg:gap-x-8">
        {secondPosts.length > 0 &&
          secondPosts.map(
            ({ slug, category, title, description, date, author, cover, tags, readTime }) => {
              return (
                <div key={slug} className="w-full">
                  <Post
                    key={slug}
                    slug={slug}
                    category={category}
                    title={title}
                    description={description}
                    date={date}
                    author={author}
                    cover={cover}
                    tags={tags}
                    readTime={readTime}
                    type={1}
                  />
                </div>
              );
            }
          )}
      </section>
      <section className="flex flex-col">
        {thirdPosts.length > 0 &&
          thirdPosts.map(
            ({ slug, category, title, description, date, author, cover, tags, readTime }) => {
              return (
                <div key={slug}>
                  <Post
                    key={slug}
                    slug={slug}
                    category={category}
                    title={title}
                    description={description}
                    date={date}
                    author={author}
                    cover={cover}
                    tags={tags}
                    readTime={readTime}
                    type={2}
                  />
                </div>
              );
            }
          )}
      </section>
    </div>
  );
}
