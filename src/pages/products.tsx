import React, { Component } from 'react';
import { ErrorMassage } from '../components/error';
import { Loader } from '../components/loader';
import { Modal } from '../components/modal';
import {Product} from '../components/product' 
import { useProducts } from '../data/hooks/products';
import { CreateProduct } from '../components/createProduct';
import { useContext} from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/modal.context';

export function ProductPage() {
  const {loading, products, error, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)


  const createHandler = (products: IProduct) => {
    close()
    addProduct(products)
  }



  return (
    <div className='container mx-auto max-w-1xl pt-5'>

      {loading && <Loader />}
      {error && <ErrorMassage error={error}/>}

      {products.map(product => <Product product={product} key={product.id} />)}

      {modal && <Modal title='Create New Product' onClose={close}> 
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button
      onClick={open}
       className='fixed bottom-5 right-4 w-14 h-14 rounded-full bg-red-400 text-white text-2xl'>+</button>
 
    </div>
  )
}