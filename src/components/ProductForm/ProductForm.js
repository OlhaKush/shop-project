import styles from './ProductForm.module.scss';
import clsx from "clsx";
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';


const ProductForm = (props) => {
    return (
        <form>
            <OptionSize />
            <OptionColor />
            <Button />
        </form>
    );
};


export default ProductForm;