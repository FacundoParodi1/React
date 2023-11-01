
import logo from '../../assets/logo.svg'
import CarWidget from './CarWidget'
import estios from '../../components/NavBar/NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={estios.navbar}>
        <img className={estios.logoImg} src={logo} alt="" />
        <h1 className={estios.titulo}>Burguer Delicious</h1>
        <ul className={estios.lista}>
            <li><a href="#">Hamburguesas</a></li>
            <li><a href="#">Acompañantes</a></li>
            <li><a href="#">Bebidas</a></li>
            <li><a href="#">Salsas</a></li>
            <li><CarWidget/></li>
        </ul>
        
    </nav>
    
  )
}
