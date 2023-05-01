import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams,Link } from "react-router-dom";
import { BsFillTagFill,BsFillLightningFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import Header from './Header';
function Home(){
    const [data,setdata] = useState()
    const [status,setstatus] = useState(false);
    const [img,setimg] = useState([]);
    const [temp,settemp] = useState();

    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(function (response){
        setdata(response.data);
        setimg(response.data.images);
        settemp(response.data.images[0])
        setstatus(true);
    })
    .catch(function (error) {
        console.log(error);
    })
    
    },[])
    
    if(status){
        return(
            <>
            <Header ></Header>
                <div className="container mt-4">
                <div className='row'>
                    <div className='col-5'>
                        <div className='row'>
                            <div className='col-2 '>
                                {
                                img.map((x)=>{
                                return(
                                    <img src={x} className='d-block w-100 m-3' onClick={()=>{settemp(x)}}></img>
                                )
                                })
                                }
                            </div>
                            <div className='col-10 '>
                            <img src={temp} className='h-100 w-100'></img>
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='m-1 btn btn-warning btn-lg'><HiShoppingCart></HiShoppingCart>ADD TO CART</button>
                            <button className='m-1 btn btn-danger btn-lg'><BsFillLightningFill></BsFillLightningFill>BUY NOW</button>
                        </div>
                    </div>
                    <div className='col-7 '>
                        <p className='h3'>{data.title}</p>
                        <p className='d-inline-block text-white h6 rounded fs-13 bg-success py-1 px-2'>{data.rating}</p>
                        <p className='text-success fw-bold'>Extra ₹{parseInt((data.discountPercentage*data.price)/100)} off</p>
                        <p className='h3'>₹{parseInt(Math.ceil(data.price - ((data.discountPercentage*data.price)/100)))} <del className='h6 text-secondary'>₹{data.price}</del><span className='text-success h6'> {data.discountPercentage}% off</span></p>
                        <p>+ ₹29 Secured Packaging Fee</p>
                        <p>Brand:- {data.brand}</p>
                        <p>only {data.stock} products left</p>
                        <p className='fw-bold'>Available offers</p>
                        <p className='text-success m-0'><BsFillTagFill></BsFillTagFill><span className='text-black'> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</span></p>
                        
                        <p className='text-success m-0'><BsFillTagFill></BsFillTagFill><span className='text-black'> Partner OfferPurchase now & get 1 surprise cashback coupon till November 2023Know More</span></p>
                        <sapn>Description:-</sapn><p>{data.description}</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
    else{
        return(
            <>
            data
            </>
        )
    }
}
export default Home;