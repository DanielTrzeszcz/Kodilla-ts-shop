import clsx from 'clsx';
import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
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
  );
};

export default OptionSize;