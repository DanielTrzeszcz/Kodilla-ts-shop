import { useMemo } from 'react';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';

const ProductForm = ({ 
  title, 
  basePrice, 
  sizes, 
  colors, 
  currentSize, 
  currentColor, 
  setCurrentSize, 
  setCurrentColor,
  handleAddToCart
}) => {
  const price = useMemo(() => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    return basePrice + (selectedSize?.additionalPrice || 0);
  }, [basePrice, currentSize, sizes]);

  return (
    <form onSubmit={handleAddToCart} className={styles.productForm}>
      <header className={styles.header}>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {price}$</span>
      </header>
      
      <OptionSize 
        sizes={sizes} 
        currentSize={currentSize} 
        setCurrentSize={setCurrentSize} 
      />
      
      <OptionColor 
        colors={colors} 
        currentColor={currentColor} 
        setCurrentColor={setCurrentColor} 
      />
      
      <Button type="submit" className={styles.button}>
        <span className="fa fa-shopping-cart" /> 
      </Button>
    </form>
  );
};

export default ProductForm;