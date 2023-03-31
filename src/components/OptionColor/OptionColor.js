import styles from './OptionColor.module.scss';
import clsx from 'clsx';


const OptionColor = (props) => {

    return (
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
    );
};



export default OptionColor;