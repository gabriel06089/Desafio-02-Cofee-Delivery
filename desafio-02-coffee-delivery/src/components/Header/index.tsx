import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  CartButton,
  CityButton,
  HeaderContainer,
  QuantityCircle,
} from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { CoffeeContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
  const { total, orders, address } = useContext(CoffeeContext)
  const quantityCoffee = orders.reduce(
    (sum, order) => sum + order.quantityCoffee,
    0,
  )
  const location = useLocation()
  const isOnSuccessPage = location.pathname === '/sucess'

  return (
    <HeaderContainer>
      <span>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="Logo Cofee Delivery" />
        </NavLink>
      </span>
      <nav>
        <div>
          {address.city && address.state && (
            <CityButton>
              <MapPin size={24} weight="fill" />
              <span>
                {address.city} , {address.state}
              </span>
            </CityButton>
          )}
          {total === 0 || isOnSuccessPage ? (
            <></>
          ) : (
            <NavLink to="/checkout" title="Checkout">
              <CartButton>
                {quantityCoffee > 0 && (
                  <QuantityCircle>{quantityCoffee}</QuantityCircle>
                )}
                <ShoppingCart size={24} weight="fill" />
              </CartButton>
            </NavLink>
          )}
        </div>
      </nav>
    </HeaderContainer>
  )
}
