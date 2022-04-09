import "./index.scss";

import { Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";

// components
import Price from "../../Price";

// urls
import urls from "../../../urls";

function ProductRecommendation({ items }) {
  return (
    items?.products?.length > 0 && (
      <section className="product-recommendation">
        <div className="product-recommendation__wrapper">
          {items?.title !== "" && (
            <h3 className="product-recommendation-title">{items.title}</h3>
          )}

          <Splide
            options={{
              rewind: true,
              width: "100%",
              pagination: false,
              gap: "1rem",
              perPage: 4,
              breakpoints: {
                540: {
                  perPage: 1,
                },
                768: {
                  perPage: 2,
                },
                1024: {
                  perPage: 3,
                },
              },
            }}
          >
            {items.products.map((product, key) => (
              <SplideSlide key={key}>
                <div className="slider-product">
                  <Link to={`${urls.productUrls.BASE}/${product.id}`}>
                    <img
                      src={product?.photos[0]}
                      alt={product.title}
                      className="slider-product__img"
                    />
                    <h4 className="slider-product__title">{product.title}</h4>
                  </Link>
                  <div className="slider-product__price">
                    {product.retailPrice > product.price && (
                      <span className="-retail">
                        <Price>{product.retailPrice}</Price>
                      </span>
                    )}
                    <span className="-price">
                      <Price>{product.price}</Price>
                    </span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    )
  );
}

export default ProductRecommendation;
