import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = (props) => {
  const availableProducts = useSelector((state) => state.availableItems.items)

  const products = (
    <ul>
      {availableProducts.map((product) => (
        <ProductItem 
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </ul>
  );

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {products}
    </section>
  );
};

export default Products;
