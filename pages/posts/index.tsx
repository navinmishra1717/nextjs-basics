import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { BASE_URL } from '../../config';
import { PostAttributes } from '../../utils/types';

type Props = {
  posts: PostAttributes[];
};

const Posts: NextPage<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            //  href={`/products/${post.id}` OR
            href={{
              pathname: `/posts/[id]`,
              query: { id: post.id },
            }}
          >
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${BASE_URL}/api/posts`, {
    method: 'GET',
    headers: {
      'User-Agent': '*',
      Accept: 'application/json; charset=UTF-8',
    },
  });
  const posts = await response.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};

export default Posts;
