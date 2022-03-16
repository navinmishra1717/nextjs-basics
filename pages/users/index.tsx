import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { UserData } from '../../utils/types';
import { userData } from '../../utils/data';

function Users({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ul>
      {users.map((user) => {
        <li key={user.id}>
          <Link
            href={{
              pathname: `/users/[id]`,
              query: { id: user.id },
            }}
          >
            <a>{user.name}</a>
          </Link>
        </li>;
      })}
    </ul>
  );
}

export const getServerSideProps = async () => {
  const users: UserData[] = userData.filter((item) => item.age >= 30);
  return {
    props: { users },
  };
};

export default Users;
