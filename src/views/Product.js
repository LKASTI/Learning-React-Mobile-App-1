import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader' 
import { useAxiosGet } from '../hooks/HttpRequests'

function Product(){
    const { id } = useParams()
    const url = `https://636fd253f957096d513ca4e3.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.error){
        content = <p className="text-center">
            error occurred...please refresh
        </p>
    }

    if(product.data){
        content = 
        <div>
            <h1 className="font-bold text-2xl mb-3">{product.data.name}</h1>
            <div>
                <img
                    src={product.data.image[0].imageUrl}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default Product 