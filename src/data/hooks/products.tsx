import { useEffect, useState } from "react"
import { IProduct } from "../../models"
import axios from 'axios'

export function useProducts() {
  const [products, setProduct] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(' ')

  function addProduct(product: IProduct) {
    setProduct(prev => [...prev, product])
  }


  async function fetchProducts() {

    try {
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProduct(response.data)
      setLoading(false)
    } catch (e: any) {
      // const error = e as AxiosError
      const error = e
      setLoading(false)
      setError(error.message)
    }
    
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {products, error, loading, addProduct}
}