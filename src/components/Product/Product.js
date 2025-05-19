import { useState, useMemo } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    return basePrice + (selectedSize?.additionalPrice || 0);
  };

  const price = useMemo(() => getPrice(), [basePrice, currentSize, sizes]);

  const getImageFilename = () => {
    const productPrefix = name.toLowerCase().includes('kodilla') ? 'shirt-kodilla' : 'shirt-react';
    return `${productPrefix}--${currentColor.toLowerCase()}.jpg`;
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Zapobiega domyślnej akcji formularza (odświeżeniu strony)
    
    const productSummary = {
      productName: title,
      finalPrice: price,
      selectedColor: currentColor,
      selectedSize: currentSize,
      basePrice: basePrice,
      sizeAdditionalPrice: sizes.find(size => size.name === currentSize)?.additionalPrice || 0
    };

    console.log('Product added to cart:', productSummary);
    // Tutaj w przyszłości można dodać dispatch do Reduxa lub innej metody zarządzania stanem koszyka
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/${getImageFilename()}`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <form onSubmit={handleAddToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => (
                <li key={size.name}>
                  <button 
                    type="button" 
                    className={clsx(
                      currentSize === size.name && styles.active
                    )}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                    {size.additionalPrice > 0 && (
                      <span className={styles.sizePrice}> (+{size.additionalPrice}$)</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => (
                <li key={color}>
                  <button 
                    type="button" 
                    className={clsx(
                      styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
                      currentColor === color && styles.active
                    )}
                    onClick={() => setCurrentColor(color)}
                    aria-label={`Color ${color}`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button type="submit" className={styles.button}>
            <span className="fa fa-shopping-cart" /> 
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;