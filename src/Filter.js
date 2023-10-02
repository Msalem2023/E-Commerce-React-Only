import { useState } from "react"

function Filter(props) {


    return (
        <>


            <div  className="col  rounded p-2  bg-warning  ">
                <div>
                    <h5>Search by Brand</h5>
                </div>
                <div>
                    <input type="text" placeholder="type your favorite Brand" onChange={(e) => props.OnBrand(e.target.value)} class="w-100 rounded border border-primary" required />
                    <ul className="pt-2">
                        <h5>Available Brands</h5>

                        {props.data.map((e, i) => {
                            return <li>{e.brand}</li>
                        })}
                    </ul>
                </div>
                <div className="pt-3">
                    <h5>Search by Price</h5>
                </div>
                <div className="rounded">
                    <label class="form-check-label" for="customRange2">{props.Price}</label>
                    <input type="range" onChange={(e) => props.OnPrice(e.target.value)} class="form-range" min="100" max="1000" step={100} id="customRange2" />
                </div>
                <div className="pt-3 w-100">
                    <div>
                        <h5>Search by Device</h5>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" onClick={(e) => props.onMinimize(e, "Type")} type="checkbox" value='TV' id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault"> TV </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" onClick={(e) => props.onMinimize(e, "Type")} type="checkbox" value="Phone" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">phone</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" onClick={(e) => props.onMinimize(e, "Type")} type="checkbox" value="Laptop" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">laptop</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" onClick={(e) => props.onMinimize(e, "Type")} type="checkbox" value="Fridge" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">Fridge</label>
                    </div><div class="form-check">
                        <input class="form-check-input" onClick={(e) => props.onMinimize(e, "Type")} type="checkbox" value="PC" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">PC</label>
                    </div>
                </div>


            </div>



        </>
    )

}
export default Filter