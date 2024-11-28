import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Coffee'
          price={6}
          description='Coffee for energy!'
        />
        <ProductItem
          title='Tea'
          price={7}
          description='Tea for a break!'
        />
      </ul>
    </section>
  );
};

export default Products;
