import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter.js';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { data as dataOfId } from './data/data.js';
import { Button } from 'bootstrap';

function Product() {
    const id = useParams().id
    console.log(id)
    const data=[]
    for (let i = 0; i < dataOfId.length; i++) {
        if(dataOfId[i].id==id)
        data.push(dataOfId[i])        
    }
    console.log(data[0].subcatagories)
    // dataOfId.filter(e=>e.id===id)
    // console.log(dataOfId.id===1)

    // [{
    //     id: 1,
    //     Type: "Electronics",
    //     Img: "https://m.media-amazon.com/images/I/914cXYd0yOL._AC_UL320_.jpg",
    //     Price: 300,
    //     device: "Phone",
    //     brand: "samsung",
    //     color: "red",
    //     stock: 2,
    //     discribtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //     id: 2,
    //     Type: "Electronics",
    //     Img: "https://m.media-amazon.com/images/I/71FuI8YvCNL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    //     Price: 600,
    //     brand: "appel",
    //     device: "Phone",
    //     color: "black",
    //     stock: 5,
    //     discribtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."


    // }, {
    //     id: 3,
    //     Type: "Electronics",
    //     Img: "https://m.media-amazon.com/images/I/7109tGy-B+L._AC_UY218_.jpg",
    //     Price: 900,
    //     brand: "dell",
    //     device: "laptop",
    //     color: "silver",
    //     stock: 3,
    //     discribtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."


    // }, {
    //     id: 4,
    //     Type: "Electronics",
    //     Img: "https://m.media-amazon.com/images/I/61TEXlcZJxL._AC_UY218_.jpg",
    //     Price: 300,
    //     device: "tv",
    //     brand: "toshiba",
    //     color: "red",
    //     stock: 1,
    //     discribtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."


    // },
    // ]
    const [products, setProducts] = useState([])
    const [price, setPrice] = useState()
    const [brand, setBrand] = useState()

    console.log(price)

    const search = localStorage.getItem("search")
    let filteredData = data[0].subcatagories.filter(element => {
        const filtered = []
        if (products.length > 0) {
            for (let i = 0; i < products.length; i++) {
                if (element[search].includes(products[i])) {
                    filtered.push(element)
                    return filtered
                }
            }
        } else {
            return data[0].subcatagories
        }
    }
    ).filter(e => {

        if (price >= 0) {

            return e.Price <= price
        } else {
            return data[0].subcatagories
        }
    }).filter(e => {

        if (brand) {

            return e.brand === brand
        } else {
            return data[0].subcatagories
        }
    })
    const handleFilter = (e, FilterBy) => {
        const searchBy = localStorage.setItem("search", FilterBy)
        const value = e.target.value
        console.log([...products, value])
        if (e.target.checked) {
            setProducts([...products, value])
        } else {
            setProducts(products.filter(e => e !== value))
        }
    }

    const handelPrice = (value) => {
        setPrice(value)
    }
    const handelBrand = (value) => {
        setBrand(value)


    }

    let badge="fs-600 fw-bold p-1 d-block"
    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <Filter Price={price} data={data[0].subcatagories} OnBrand={handelBrand} OnPrice={handelPrice} onMinimize={handleFilter} />
                    </div>
                    <div className="col-9 ">
                        {filteredData.map((e, i) => {
                            return <div class='row border border-secondary rounded text-decoration-none mt-1 ' >
                                <div className="col" >
                                    <img  className=' img-fluid rounded p-2 h-100  ' src={e.Img} alt='pic' />
                                </div>
                                <div class='col-sm-6 col-lg-4 p-2 row align-items-end'>
                                    <p className="fw-bold fs-900">{e.brand}</p>
                                    <Link to={`/${id}/products/${e.id}`} class="text-decoration-none">check the {e.Type}</Link>
                                    <span class="d-block ">{e.discribtion}</span>
                                    <div className="">
                                        <span class="badge bg-success">8.9</span>
                                        <span className="p-2">Exceptional</span>
                                    </div>
                                </div>
                                <div className="col  align-self-end ">
                                    <div className="">
                                        <div className="text-end">
                                            <span class={`${e.stock>3?badge +=" badge bg-success":badge +="badge bg-danger"}`}>Only : {e.stock} left </span>
                                            <span className='fs-600 fw-bold text-end '>Available Colors:{e.color}</span>
                                            <span className="d-block">${e.Price}</span>
                                            <span>includes taxes and fees</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}



                    </div>
                </div>
            </section>


        </>
    )

}
export default Product 