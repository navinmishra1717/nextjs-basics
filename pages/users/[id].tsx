import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import NotFoundPage from '@pages/notFoundPage';
import type { UserData } from '../../utils/types';
import { userData } from '../../utils/data';

type Props = {
  user: UserData;
};

const User: NextPage<Props> = ({ user }) => {
  return user ? (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
    </div>
  ) : (
    <NotFoundPage />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = userData.map((user) => ({ params: { id: user.id } }));
  return {
    paths,
    fallback: true, // false or blocking,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user = userData.find((user) => user.id === params?.id);
  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user },
  };
};

export default User;
