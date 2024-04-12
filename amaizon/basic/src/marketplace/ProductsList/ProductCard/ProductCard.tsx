import './ProductCard.css';
import {Product} from '../../../@types/Product.ts';
import {filterGiftabilityById} from '../../Filters/GiftabilityFilter/values.ts';
import {filterImpulseScoreById} from '../../Filters/ImpulseScoreFilter/values.ts';

export const ProductCard = ({product}: {product: Product}) => {
    return (
        <div className="product-card">
            <span className="product-image" style={{
                backgroundImage: `url(${product.imageUrl})`,
            }}></span>
            <div className="product-details">
                <div className="product-info">
                    <h3>{product.name}</h3>
                    <h4>{product.brand}</h4>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>
                        <span className="details-name">Giftability:</span>
                        <br/>
                        {filterGiftabilityById[product.giftability]}
                    </p>
                    <p>
                        <span className="details-name">Impulse Score: </span>
                        <br />
                        {filterImpulseScoreById[product.impulseScore]}
                    </p>
                </div>
            </div>
        </div>
    );
};
