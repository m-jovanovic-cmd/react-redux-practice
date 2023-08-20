import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  let cartItems = ( 
    <ul>
      {items.map((cartItem) => (
          <CartItem 
            key={cartItem.id}
            item= {{ 
              title: cartItem.title,
              quantity: cartItem.quantity,
              total: (cartItem.quantity * cartItem.price),
              price: cartItem.price,
              id: cartItem.id,
            }}
          />
      ))}
    </ul>
  );

  if (items.length === 0) {
    cartItems = <p>No items in cart currently.</p>;
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems}
    </Card>
  );
};

export default Cart;