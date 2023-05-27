import { ProductChart } from '../../app/components/ProductChart/ProductChart';
import { useAppSelector } from '../../store/hooks';
import styles from './Products.module.css';
import { Linking } from '../../app/components/Linking';
import { useMemo } from 'react';

const ProductsPage = () => {
  const { category, productGroups } = useAppSelector(state => state.productsSlice.productsInfo);
  const productLinks = useMemo(() => {
    return productGroups.map(({ name }) => name);
  }, []);

  return (
      <div>
          <h1 className={styles.category}>
              {category.name}
          </h1>
          <Linking links={productLinks} className={styles.linking}/>
          <div>
              {productGroups.map(({ name, items }) => {
                return (
                      <div key={name} id={name}>
                          <h2 className={styles.productName}>
                              {name}
                          </h2>
                          <ProductChart data={items}/>
                      </div>
                );
              })}
          </div>
      </div>
  );
};

export default ProductsPage;
