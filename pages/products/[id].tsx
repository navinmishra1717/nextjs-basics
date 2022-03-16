import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import type { ProductData } from '../../utils/types';
import { productData } from 'utils/data';
import NotFoundPage from '@pages/notFoundPage';
import { ParsedUrlQuery } from 'querystring';

interface ProductProps {
  product: ProductData;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const Product: NextPage<ProductProps> = ({ product }) => {
  return product ? (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.description}</h2>
      <h3>{product.price}</h3>
    </div>
  ) : (
    <NotFoundPage />
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = productData.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: true, // false or blocking,
  };
};

export const getStaticProps: GetStaticProps<ProductProps, Params> = async ({
  params,
}) => {
  const { id } = params!;
  const product = productData.find((item) => item.id === id) as ProductData;
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: { product },
  };
};

/**
 * NOTE:
 * getStaticProps has to return an object with a props property
 * getStaticPaths has to return an object with a paths property.
 *
 * points of interest
 * getStaticPaths is called before getStaticProps
 * getStaticPaths returns the list of of possible id to generate the page for
 * getStaticProps expects a param id and fetches the data for the id
 * The Product/any component itself expects a product: Product prop
 */

export default Product;
