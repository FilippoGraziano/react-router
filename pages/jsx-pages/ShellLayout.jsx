import '../css-pages/ShellLayout.css';
import { Outlet, NavLink } from 'react-router';

const ShellLayout = () => (

    <div id='ShallLayout'>

        <header>

            <div className="container">

                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="AboutUs" >Chi Siamo</NavLink>
                    <NavLink to="Products" >Prodotti</NavLink>
                
                </nav>
                
            </div>

        </header>

        <main className='container'>

            <Outlet />

        </main>

        <footer>

            <div className="container">

                <h2>Ciao {`:)`}</h2>

            </div>

        </footer>

    </div>
);

export default ShellLayout