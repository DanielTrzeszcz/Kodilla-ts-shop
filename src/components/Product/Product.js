import { useState } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log('Product added to cart:', {
      productName: title,
      finalPrice: basePrice + sizes.find(size => size.name === currentSize)?.additionalPrice || 0,
      selectedColor: currentColor,
      selectedSize: currentSize
    });
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} title={title} />
      <ProductForm
        title={title}
        basePrice={basePrice}
        sizes={sizes}
        colors={colors}
        currentSize={currentSize}
        currentColor={currentColor}
        setCurrentSize={setCurrentSize}
        setCurrentColor={setCurrentColor}
        handleAddToCart={handleAddToCart}
      />
    </article>
  );
};

export default Product;