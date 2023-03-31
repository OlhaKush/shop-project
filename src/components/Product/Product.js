import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import { useState } from 'react';


const Product = props => {

    const [currentColor, setCurrentColor] = useState(props.currentColor);
    const [currentSize, setCurrentSize] = useState(props.currentSize);

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
   };

    const changeSize = (item) => {
        setCurrentSize(item)
    };

    const changeColor = (item) => {
        setCurrentColor(item)
    };

    const getPrice = () => (props.basePrice + currentSize.additionalPrice);


    const addToCard = (e) => {
        e.preventDefault();
        console.log (`Summary ====== Name:${props.name} Price:${getPrice()} Size:${currentSize.name} Color:${currentColor}`)
    };

  return (
    <article className={styles.product}>

        <ProductImage title={props.title} name={props.name} currentColor={currentColor}  />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>

          <form>

            <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(item =>
                    <li key={item.name}>
                        <button type="button" onClick={() => changeSize(item)} className={clsx(item.name === currentSize.name && styles.active)}>{item.name}</button>
                    </li>
                )}
            </ul>
          </div>

            <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(item =>
                    <li key={item}>
                        <button type="button" onClick={() => changeColor(item)} className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} />
                    </li>
                )}
            </ul>
          </div>

          <Button className={styles.button} onClick={addToCard}>
            <span className="fa fa-shopping-cart" />
          </Button>

        </form>

      </div>
    </article>
  )
};

export default Product;