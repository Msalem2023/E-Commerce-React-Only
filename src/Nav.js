import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/context.js';



function Nav() {
    const{state}=useContext(CartContext)
    const Qty=state.length
   console.log(Qty)
        return (
        <section className='container fixed-top '>
            <div className='row'>
                <Link to="/" className='col rounded-pill bg-warning text-decoration-none   '>
                    <h3 style={{textAlign:"center",color:"black"}}>Amazon</h3>
                </Link>
                <div className='col-6'>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="warning">Search</Button>
                    </Form>

                </div>
                <div className='col-3'>
                    <div className='d-flex justify-content-end gap-2' >
                        <Button variant="dark">Sign Up</Button>

                        <Link to="/cart" className='text-decoration-none btn btn-dark' variant="dark" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg><Badge bg="warning">{Qty}</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Nav;