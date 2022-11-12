import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
import Loader from '../components/Loader' 
import ProductCard from '../components/ProductCard'
import {useAxiosGet} from '../hooks/HttpRequests'

function Home(){
    const url = `https://636fd253f957096d513ca4e3.mockapi.io/api/v1/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.error){
        content = <p className="text-center">
            error occurred...please refresh
        </p>
    }

    if(products.data){
        content = 
        products.data.map((product, key) =>
            <div key={key}>
                <ProductCard product={product}/>
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home