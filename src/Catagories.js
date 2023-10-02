import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import 'bootstrap/dist/css/bootstrap.min.css';






function Catagory() {
    const Catagories=[{
        id:1,
        catagory:"Electronics",
        Img:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
    },{
        id:2,
        catagory:"kitchen",
        Img:"https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg"
    },{
        id:3,
        catagory:"Beauty",
        Img:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
    },{
        id:4,
        catagory:"School",
        Img:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_1X._SY304_CB630084689_.jpg"
    },{
        id:5,
        catagory:"Health",
        Img:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
    },{
        id:6,
        catagory:"Fashon",
        Img:"https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg"
    },

]

    return (
        <>
        <section className='container'>
            <div className='row justify-content-around'>

           {Catagories.map((e,i)=>{
           return <Card className='col-3 m-1'>
             <Card.Img variant="top" className='w-100' rounded src={e.Img} />
             <Card.Body>
                 <Card.Title>{e.catagory}</Card.Title>
                 <Card.Text>
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                 </Card.Text>
                 <Button variant="primary">see more</Button>
             </Card.Body>
         </Card>
        })
         }

            </div>

        </section>      
            
            

        
               
        </>
    )

}
export default Catagory