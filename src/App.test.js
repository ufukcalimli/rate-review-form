import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders product', () => {
  const { getByTestId } = render(<App />);
  const product = getByTestId(/product/i);
  expect(product).toBeInTheDocument();
});

test('renders product image', () =>{
  const {getByAltText} = render(<App/>);
  const img = getByAltText(/Alpha Beer/i);
  expect(img).toBeInTheDocument();
 });

test('renders product average rating', () =>{
  const {getByTestId} = render(<App/>);
  const rate = getByTestId(/average-rate/i);
  expect(rate).toBeInTheDocument();
 })

 test('renders review boxes', () =>{
  const {getByText} = render(<App/>);
  const reviewBox = getByText(/ibrahim erkal/i);
  expect(reviewBox).toBeInTheDocument();
 })
