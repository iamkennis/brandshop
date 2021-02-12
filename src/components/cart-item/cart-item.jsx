import { CartItemContainer, CartItemImage, ItemDetailContainer} from './cartitem.style'

const CartItem = ({ item: { imageUrl,  price,  name,  quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailContainer>
            <span className='name'>{name}</span>
            <span className='name'>{ quantity} x  ${price}</span>
        </ItemDetailContainer>
    </CartItemContainer>
)

export default CartItem