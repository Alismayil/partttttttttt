import React, { createContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const BasketContext = createContext()
function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])

    function handleAddbasket(item) {
        const basketProduct = basket.find((x) => x._id === item._id)
        if (basketProduct) {
            basketProduct.count++
            basketProduct.total = basketProduct.count * basketProduct.price
            toast.success(`Send Basket Count : ${basketProduct.count}`)
            return
        }
        else {
            const total = item.price
            setBasket([...basket, { ...item, count: 1, total: total }])
            toast.success(`Send Basket : ${item.name}`)
        }
    }

    function handleCountVal(isAdd, id) {
        const countProduct = basket.find((x) => x._id === id)
        if (countProduct && isAdd === true) {
            countProduct.count++
            setBasket([...basket])
        } else{
            if (countProduct.count === 1) {
                handleDelete(id)
                toast.error("Deleted Basket")
                return  
            }
            countProduct.count--
            setBasket([...basket])
        }
    }

    function handleDelete(id) {
        setBasket(basket.filter((x) => x._id !== id))
    }
    const data = {
        handleAddbasket,
        basket, setBasket,
        handleDelete,
        handleCountVal
    }

    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider