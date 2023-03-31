import styles from './OptionSize.module.scss';
import clsx from 'clsx';


const OptionSize = (props) => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(item =>
                    <li key={item.name}>
                        <button type="button" onClick={() => changeSize(item)} className={clsx(item.name === props.currentSize.name && styles.active)}>{item.name}</button>
                    </li>
                )}
            </ul>
        </div>
    );
};



export default OptionSize;