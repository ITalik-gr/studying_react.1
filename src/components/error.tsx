import React, { Component } from 'react';

interface ErrorMassageProps {
  error: string
}
export function ErrorMassage({error}: ErrorMassageProps) {
  return(
    <p className='text-center text-red-500'>{error}</p>
  )
}