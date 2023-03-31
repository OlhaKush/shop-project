import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import productsData from "../../data/products";

const Product = props => {

    const [currentColor, setCurrentColor] = useState(productsData);
    const [currentSize, setCurrentSize] = useState(productsData);

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
   };

    const changeSize = (e) => {
        setCurrentSize(e.target.value)
    };

    const changeColor = (e) => {
        setCurrentColor(e.target.value)
    };

    // const getPrice = () => {
    //
    // };

    const addToCard = (e) => {
        e.preventDefault();
        console.log (`Summary ====== Price:${props.basePrice} Size:${currentSize} Color:${currentColor}`)
    };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${props.title}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(item =>
                    <li key={item}>
                        <button type="button" onClick={changeSize} className={styles.active}>{item.name}</button>
                    </li>
                )}
              {/*<li><button type="button" className={styles.active}>S</button></li>*/}
              {/*<li><button type="button">M</button></li>*/}
              {/*<li><button type="button">L</button></li>*/}
              {/*<li><button type="button">XL</button></li>*/}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(item =>
                    <li key={item}>
                        <button type="button" onClick={changeColor} className={clsx(prepareColorClassName(item), item === item && styles.active)} />
                    </li>
                )}
              {/*<li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>*/}
              {/*<li><button type="button" className={clsx(styles.colorRed)} /></li>*/}
              {/*<li><button type="button" className={clsx(styles.colorWhite)} /></li>*/}
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