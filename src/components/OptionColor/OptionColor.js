import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  return (
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
  );
};

export default OptionColor;