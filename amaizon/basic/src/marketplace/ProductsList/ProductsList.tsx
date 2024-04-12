import './StockList.css';
import {Product} from '../../@types/Product.ts';
import {ProductCard} from './ProductCard/ProductCard.tsx';

export type StockListProps = {
    filteredProducts: Product[];
};

export const ProductsList = (props: StockListProps) => {
    const {filteredProducts} = props;

    return (
        <div className="products-list">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
