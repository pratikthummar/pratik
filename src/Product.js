import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
function Product(){
        const [data,setdata] = useState([]);
        useEffect(() => {
            axios.get('https://dummyjson.com/products')
            .then(function (response){
            console.log(response.data.products);
            setdata(response.data.products);
        })
        .catch(function (error) {
            console.log(error);
        })
        
        },[]);


        const searchdata = (sname) =>{
            axios.get(`https://dummyjson.com/products/search?q=${sname}`)
            .then(function(response){
            console.log(response.data.products)
            setdata(response.data.products);
            })
            .catch(function(error){
                console.log(error);
            })
        
        }
    return(
        <>
         <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
<div class="container">
<img src={require("./img/logo.jpg")}class="navbar-brand logo"></img>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  <from class="d-flex " role="search">
      <input class="form-control me-2 rounded-0" type="text" onChange={(e)=> {searchdata(e.target.value)}}
       placeholder="search"></input>
       <button class="btn text-primary fw-bold btn-light rounded-0"type="">login</button>
  </from>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
  <form class="d-flex" role="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</div>
</div>
</nav>
    <div className='container'>
        <div className='row'>
        {
        data.map((x)=> {
            return(
                <>
                <div className='col-3 my-3' >
                <Link to={`/home/${x.id}`}>
                <img className='w-100 h-100' src={x.thumbnail}></img>
                </Link>
                </div>
                <div className='col-6 text-start my-3'>
                    <span className='d-block h5'>{x.title}</span>
                    <span className='d-inline-block text-white h6 rounded fs-13 bg-success py-1 px-2'>{x.rating}</span>
                    <span className='d-block'>Stock-{x.stock}</span>
                    <span className='d-block'>Brand-{x.brand}</span>
                    <span className='d-block'>{x.description}</span>
                </div>
                <div className='col-3 my-3'>
                    <span className='d-block h3'>₹{x.price}</span>
                    <span className='d-block  text-success'>{x.discountPercentage}% off</span>
                    <span className='fs-13'>Free delivery</span>
                </div>
                </>
        )
        })
        }
    </div>
    </div>
        </>
    );
}
export default Product;