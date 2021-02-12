import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import {toggleCartHidden} from '../../redux/cart/cart-actions'
import {createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import {
  CartDropdownContainer,
  CustomButtonContainer,
  CartItemsContainer,
  EmptyMessage
} from './cart-dropdrown-style'

const CartDropdown = ({ cartItems, history,  dispatch}) => (
    <CartDropdownContainer>
      <CartItemsContainer>
      {
        cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
         ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
           ) }
      </CartItemsContainer>
    <CustomButtonContainer
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButtonContainer>
    </CartDropdownContainer>
  );

  const mapStateToProps =   createStructuredSelector ({
    cartItems : selectCartItems
  });
  
  export default  withRouter(connect(mapStateToProps)(CartDropdown))
  





  





