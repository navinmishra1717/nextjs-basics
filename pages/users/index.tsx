import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { BASE_URL } from 'config';
import { UserData } from '../../utils/types';

type Props = {
  users: UserData[];
};

const Users: NextPage<Props> = ({ users }) => {
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
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    // const response = await fetch(`${BASE_URL}/api/users`, {
    //   method: 'GET',
    //   headers: {
    //     'User-Agent': '*',
    //     Accept: 'application/json; charset=UTF-8',
    //   },
    // });
    // const users = await response.json();
    const users = {};
    // const users = await res.json();
    console.log(users, 'users');

    if (!users) {
      return {
        notFound: true,
      };
    }
    return {
      props: { users },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error, 'error');
    return {
      props: {
        users: [],
      },
    };
  }
};

export default Users;
