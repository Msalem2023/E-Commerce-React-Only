import Badge from 'react-bootstrap/Badge';

function Counter(props) {
    console.log(props.quantaty)
    console.log(props.quantaty.Qty)

    const counter = {
        value: props.quantaty.Qty
    }



    return (
        <>
            <div className='d-flex gap-2 '>
                <button onClick={() => props.onPlus(props.quantaty)} className="btn btn-primary col">+</button>
                <Badge className='col text-center ' bg="secondary">{counter.value <= 0 ? "zero" : counter.value}</Badge>
                <button onClick={() => props.onMinus(props.quantaty)} className="btn btn-warning col">-</button>


            </div>
            <div className='d-flex mt-2'>

                <button onClick={() => props.onDelete(props.quantaty.id)} className="btn btn-danger col  gap-5"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>Delete</button>
            </div>
        </>
    )


}
export default Counter