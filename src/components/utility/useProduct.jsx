import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log('product Call')
        fetch('https://mocki.io/v1/43ed4fca-282a-42f7-a6ea-9c3f4c75b372')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
};

export default useProduct;