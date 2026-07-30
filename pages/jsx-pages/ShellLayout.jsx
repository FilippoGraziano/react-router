import '../css-pages/ShellLayout.css';
import { Outlet, NavLink } from 'react-router';

const ShellLayout = () => (

    <>
        <header>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="AboutUs" >Chi Siamo</NavLink>
                <NavLink to="Products" >Prodotti</NavLink>
            </nav>
        </header>

        <Outlet />

        <footer></footer>
    </>
);

export default ShellLayout