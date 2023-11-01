
import Carrito from '../../assets/carrito.svg';
import estilos from './NavBar.module.css'

export default function CarWidget() {
  return (
    <span>
        <img className={estilos.carrito} src={Carrito} alt="" />
        <span className={estilos.span}>0</span>
    </span>
  )
}
