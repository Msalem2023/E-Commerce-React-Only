import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import Dropdown from 'react-bootstrap/Dropdown';
import Collapse from 'react-bootstrap/Collapse';
import { useContext, useState } from 'react';
import { data as dataOfId } from './data/data.js';




import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { CartContext } from './context/context.js';

function Selected() {
    const{dispatch}=useContext(CartContext)
    const [open, setOpen] = useState(false);
    const [about, setAbout] = useState(false);
    const id = useParams().id
    const productId = useParams().productId
    const data = []
    for (let i = 0; i < dataOfId.length; i++) {
        if (dataOfId[i].id == id) {
            let subcatagories=dataOfId[i].subcatagories
            for (let j = 0; j < subcatagories.length; j++) {
                if(subcatagories[j].id==productId){

                    data.push(subcatagories[j])
                    console.log(data[0].Img)

                }
                
            }
        }
    }
    const priceOfProduct=data[0].Price
    const [Price,setPrice]=useState(priceOfProduct)
    const Coupon=(e)=>{
        let value = +e.target.value
        if(e.target.checked){
            setPrice(Price-value)
        }else{
            setPrice(priceOfProduct) 
        }

    }
    const[quantaty,setQuantaty]=useState()
    const handelCart=(id)=>{
        console.log(data[0].id)
        
        dispatch({ type: "add", payload: {id:data[0].id, img:data[0].Img, price:Price,Qty:quantaty,type:data[0].Type } })
    }




    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <img className='w-100' src={data[0].Img} alt="pic" />


                    </div>
                    <div className="col-5">
                        <h3 className="border-bottom">
                            UMIDIGI Rugged Unlocked Smartphone, 6150mAh Battery, Bison GT2 8GB+128GB Android 12, 6.5"+FHD, G95 Octa-core, 64MP Triple Camera, NFC, 18W Fast Charge, IP68 & IP69K Waterproof Unlocked Cell Phone
                        </h3>
                        <h3>${Price}</h3>
                        <h5 className='border-bottom'>
                            <Badge bg="warning">Coupon</Badge>
                            <div class="form-check pb-1">
                                <input class="form-check-input" onChange={(e)=>Coupon(e)} type="checkbox" value='40' id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Applly 40$ coupon  </label>
                            </div>
                        </h5>
                        <Button
                            onClick={() => setAbout(!about)}
                            aria-controls="example-collapse-text"
                            aria-expanded={about}
                            className='w-100 btn btn-light'
                        >
                            About the Item
                        </Button>
                        <Collapse in={about}>
                            <div id="example-collapse-text">
                                <ul>
                                    <li>6.5in FHD+ Large Screen & 64MP Quad Camera</li>
                                    <li>6150mAh Large Battery & 18W Fast Charging</li>
                                    <li>MediaTek Helio G95 & 8GB + 128GB & Android 12</li>
                                    <li>Headset-free FM Radio&Useful Outdoors Toolkit for Adventure</li>
                                    <li>Durable Rugged Phone & 1-Year Warranty</li>

                                </ul>
                            </div>
                        </Collapse>


                    </div>
                    <div className="col">
                        <Card className="text-center">
                            <Card.Header>${Price}</Card.Header>
                            <Card.Body>
                                <Card.Title>Deliver to Egypt</Card.Title>
                                <Card.Text>
                                    Delivery Wednesday, September 27. Order within 22 hrs 21 mins
                                </Card.Text>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        Qty : {quantaty}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=>setQuantaty(1)}>1</Dropdown.Item>
                                        <Dropdown.Item onClick={()=> setQuantaty(2)} >2</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>setQuantaty(3)}>3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant="warning mt-2" onClick={()=>handelCart(data[0].id)}>Add to Cart</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted"><Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                Returns
                            </Button>
                                <div style={{ minHeight: '150px' }}>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                            Eligible for Return, Refund or Replacement within 30 days of receipt
                                        </div>
                                    </Collapse>
                                </div>
                            </Card.Footer>
                        </Card>

                    </div>

                </div>
            </section >
        </>
    )

}
export default Selected