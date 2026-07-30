import '../css-pages/ShellLayout.css';
import { Outlet, NavLink } from 'react-router';

const ShellLayout = () => (

    <div id='ShallLayout'>

        <header>

            <nav>

                <NavLink to="/" >Home</NavLink>
                <NavLink to="AboutUs" >Chi Siamo</NavLink>
                <NavLink to="Products" >Prodotti</NavLink>
                
            </nav>

        </header>

        <main>

            <Outlet />

        </main>

        <footer>

            <h2>Ciao {`:)`}</h2>

        </footer>

    </div>
);

export default ShellLayout