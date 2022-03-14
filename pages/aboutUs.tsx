import type { ReactElement } from 'react';
import Layout from '../components/layout';

function About() {
  return <div>Hello this is about us page</div>;
}

About.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <div>{page}</div>
    </Layout>
  );
};

export default About;
