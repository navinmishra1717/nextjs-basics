import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { productData } from '../../utils/data';
import { ProductData } from '../../utils/types';

type Props = {
  products: ProductData[];
};

const Products: NextPage<Props> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link
            //  href={`/products/${product.id}` OR
            href={{
              pathname: `/products/[id]`,
              query: { id: product.id },
            }}
          >
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products: ProductData[] = productData.filter(
    (item) => Number(item.price) >= 200
  );
  if (!products) {
    return {
      notFound: true,
    };
  }
  return {
    props: { products },
  };
};

export default Products;
