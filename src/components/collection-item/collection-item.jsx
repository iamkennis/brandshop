
import {CustomButtonContainer, CollectionItemContainer, CollectionItemImage, CollectionFooter} from './collection-item.styles'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart-actions'


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;  
    return (
        <CollectionItemContainer>
            <CollectionItemImage
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionFooter>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </CollectionFooter>
            <CustomButtonContainer onClick={() => addItem(item)} inverted >Add to cart</CustomButtonContainer>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
     addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem)