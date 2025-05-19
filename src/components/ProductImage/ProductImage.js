import styles from './ProductImage.module.scss';

const ProductImage = ({ name, currentColor, title }) => {
  const getImageFilename = () => {
    const productPrefix = name.toLowerCase().includes('kodilla') ? 'shirt-kodilla' : 'shirt-react';
    return `${productPrefix}--${currentColor.toLowerCase()}.jpg`;
  };

  return (
    <div className={styles.imageContainer}>
      <img 
        className={styles.image}
        alt={title}
        src={`${process.env.PUBLIC_URL}/images/products/${getImageFilename()}`}
      />
    </div>
  );
};

export default ProductImage;