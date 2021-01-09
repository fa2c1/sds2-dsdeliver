import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepHeader';
import './styles.css';
import { Product } from './types';

function Orders(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(Response => setProducts(Response.data)).catch(error => console.log(error));
    }, []);

    return (
        <div className="ORDERS-CONTAINER">
            <StepsHeader />
            <ProductsList products={products}/>
        </div>
    )
}

export default Orders;