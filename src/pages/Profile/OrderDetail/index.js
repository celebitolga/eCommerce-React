import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./index.scss";

// components
import Price from "../../../components/Price";

// api
import { fetchUserOrderDetail } from "../../../api";

// context
import { useAuth } from "../../../context/AuthContext";

// urls
import urls from "../../../urls";

function OrderDetail() {
  const { order_id } = useParams();

  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getOrderDetail = async () => {
    try {
      const data = await fetchUserOrderDetail(user, order_id);

      setData(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderDetail();
  }, []);

  if (loading) {
    return "Loading...";
  }

  return (
    <section className="profile-order-detail">
      <div className="profile-order-detail__wrapper">
        <h1 className="profile-order-detail-title">My Orders</h1>

        <div className="profile-order-detail__content">
          {data ? (
            <div className="profile-order-detail__orders">
              <div className="profile-order-detail__orders-info">
                <p>
                  <b>Address: </b> {data.address}
                </p>
                <p>
                  <b>Date: </b> {data.date}
                </p>
              </div>

              {data.items.map((order, key) => (
                <div key={key} className="order">
                  <div className="order__top">
                    <Link to={`${urls.productUrls.BASE}/${order.id}`}>
                      <img src={order?.photos[0]} alt={order.title} />
                    </Link>
                    <div className="order__top-attributes">
                      <Link to={`${urls.productUrls.BASE}/${order.id}`}>
                        <h3 className="order__top-attributes-title">{order.title}</h3>
                      </Link>
                      <p>
                        <b>Quantity: </b> {order.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="order__bottom">
                    <b>Total: </b> <Price>{order.price * order.quantity}</Price>
                  </div>
                </div>
              ))}

              <div className="profile-order-detail__orders-total">
                <b>Total: </b> <Price>{data.totalPrice}</Price>
              </div>
            </div>
          ) : (
            <p className="no-order">No orders</p>
          )}
        </div>

      </div>
    </section>
  );
}

export default OrderDetail;
