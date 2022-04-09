import { useEffect, useState } from 'react';

import './index.scss';

// Components
import Card from "../../components/Card";

// Api
import { fetchProductList } from "../../api";

function Products() {
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const [error, setError] = useState({
    isError: false,
    message: '',
  });
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);

  const getProducts = async (page = 0) => {
    setLoadingPage(true);

    try {
      const data = await fetchProductList(page);

      setData(data);
      setProducts(prev => [...prev, ...data.products]);
    } catch (error) {
      setError({ isError: true, message: error });
    } finally {
      setLoading(false);
      setLoadingPage(false);
    }
  }

  const handleNextPageButtonClick = () => {
    let page = 0;

    if (data.pages === 0 || data.pages === data.currentPage) {
      return;
    }

    if (data.pages !== data.currentPage && data.currentPage === 0) {
      page = 2;
    } else {
      page = data.currentPage + 1;
    }

    getProducts(page);
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return "Loading...";

  if (error.isError) return "An error has occurred: ";

  return (
    <div className="products-page">
      <div className="products-page__wrapper">
        {data && products.length > 0 && (
          products.map((product) => (
            <div className="products-page__product" key={product.id}>
              <Card product={product} />
            </div>
          ))
        )}

        <div className="products-page__bottom">
          <button
            onClick={() => handleNextPageButtonClick()}
            disabled={loadingPage || data.pages === 0 || data.pages === data.currentPage}
          >
            {loadingPage
              ? 'Loading more...'
              : data.pages !== 0 && data.pages !== data.currentPage
              ? 'Load More'
              : 'Nothing more to load'}
          </button>
        </div>
      </div>

    </div>
  );
}

export default Products;
