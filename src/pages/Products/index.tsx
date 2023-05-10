import { ProductChart } from '../../app/components/ProductChart/ProductChart';
import { useAppSelector } from '../../store/hooks';

const MockData = [
  {
    id: 5,
    name: 'Пастеризованное',
    minPrice: null,
    mediumPrice: 9015,
    maxPrice: null,
    createdAt: '23.01',
    value: 1000,
    categoryId: 3,
    productDimensionId: 2,
    updatedAt: '2023-04-15T20:10:39.607Z',
  },
  {
    id: 9,
    name: 'Пастеризованное',
    minPrice: null,
    mediumPrice: 8601,
    maxPrice: null,
    createdAt: '24.01',
    value: 1000,
    categoryId: 3,
    productDimensionId: 2,
    updatedAt: '2023-04-22T14:17:08.813Z',
  },
  {
    id: 31,
    name: 'Пастеризованное',
    minPrice: 53.32,
    mediumPrice: 6015,
    maxPrice: 419.98,
    createdAt: '25.01',
    value: 1000,
    categoryId: 3,
    productDimensionId: 2,
    updatedAt: '2023-04-24T21:01:24.664Z',
  },
];

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
