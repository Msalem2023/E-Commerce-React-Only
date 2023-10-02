import Counter from "./AmazonCart Counter.js";
import { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { CartContext } from "./context/context.js";



function AmazonCart() {

    const [show, setShow] = useState(false);
    const { state } = useContext(CartContext)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [quantaty, setQuantaty] = useState(state)
    const handelPlus = (counter) => {
        const counters = [...quantaty];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].Qty++;
        console.log(counters);
        setQuantaty(counters)

    }
    const handelMinus = counter => {
        const counters = [...quantaty]
        const index = counters.indexOf(counter)
        counters[index] = { ...counter }
        counters[index].Qty -= 1;
        setQuantaty(counters)
    }
    const handelDelete = counterId => {
        const counters = quantaty.filter(e => e.id !== counterId);
        setQuantaty(counters)
    }
    const handelReset = () => {
        const counters = quantaty.map(e => { e.Qty = 0; return e })
        setQuantaty(counters)
    }


    return (
        <>
        <section className="container mt-5">
            <div className="row gap-5 ">

            {quantaty.map(quantaty => {
                return <Card className='col-3'>
                    <Card.Img variant="top" className="w-100 h-100 pt-2" rounded src={quantaty.img} />
                    <Card.Body>
                        <Card.Title>{quantaty.type}</Card.Title>
                        <Card.Text>
                            ${quantaty.Qty <= 0 ? "0" : quantaty.price * quantaty.Qty}
                        </Card.Text>
                        <div className='row gap-2'>
                            <Counter onDelete={handelDelete} onPlus={handelPlus} onMinus={handelMinus} onReset={handelReset} quantaty={quantaty} />
                        </div>
                    </Card.Body>
                </Card>
            })}
            </div>
        </section>
        </>
    )

}
export default AmazonCart