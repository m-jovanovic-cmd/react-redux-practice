import classes from './CartItem.module.css';

import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const addItemHandler = (value) => {
    dispatch(cartActions.addItem(value));
  };

  const removeItemHandler = (value) => {
    dispatch(cartActions.removeItem(value));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeItemHandler({id})}>-</button>
          <button onClick={() => addItemHandler({id})}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
