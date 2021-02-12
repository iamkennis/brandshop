
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/Bs.svg'
import CartIcon from '../cart-icon/cart-icon'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { createStructuredSelector } from 'reselect'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { HeaderContainer, LogoContainer, OptionsContainer,OptionLink } from './header-styled'
import { signOutStart } from '../../redux/user/user-actions'

const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/" >
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
            </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
            </OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                        <OptionLink to='/signin'>
                            SIGN IN
                        </OptionLink>
                    )}
                <CartIcon />
            </OptionsContainer>
            { hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector ({
   currentUser : selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)