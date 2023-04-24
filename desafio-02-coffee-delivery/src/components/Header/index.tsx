import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartButton, CityButton, HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="Logo Cofee Delivery" />
        </NavLink>
      </span>
      <nav>
        <div>
          <CityButton>
            <MapPin size={24} weight="fill" />
            <span>Porto Alegre, RS </span>
          </CityButton>
          <NavLink to="/checkout" title="Checkout">
            <CartButton>
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
