import { ProductChart } from '../../app/components/ProductChart/ProductChart';
import { useAppSelector } from '../../store/hooks';

const ProductsPage = () => {
  const { category, productGroups } = useAppSelector(state => state.productsSlice.productsInfo);
  return (
        <div>
          <div>
            Products Page
          </div>
          <div>
            Current category: {category.name}
          </div>
          {productGroups.map(({ name, items }) => {
            return (
                <div key={name}>
                  <div>
                    {name}
                  </div>
                  <ProductChart data={items}/>
                </div>
            );
          })}
        </div>
  );
};

export default ProductsPage;
