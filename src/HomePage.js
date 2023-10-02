import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { data } from './data/data.js';
import { Link } from 'react-router-dom';


function Corousel() {
    const images = [{
        id: 1,
        Img: "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
    }, {
        id: 2,
        Img: "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
    }, {
        id: 3,
        Img: "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"

    }]
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    {images.map((e,i)=>{
        return<div class="carousel-item active">
        <img src={e.Img} class="d-block w-100" alt="..."/>
        </div>
    })}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<section style={{zIndex:"1",position:"relative",bottom:"150px"}} className='container'>
            <div className='row justify-content-around'>

           {data.map((e,i)=>{
           return <Card className='col-3 m-1'>
             <Card.Img variant="top" style={{width:"100%",borderRadius:"25px",paddingTop:"10px"}} rounded src={e.Img} />
             <Card.Body>
                 <Card.Title>{e.catagory}</Card.Title>
                 <Card.Text>
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                 </Card.Text>
                 <Link to={`/${e.id}`} className="primary">see more</Link>
             </Card.Body>
         </Card>
        })
         }

            </div>

        </section>
        </>
    );
}



export default Corousel