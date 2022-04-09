import products from './data/products'

if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify(products));
}