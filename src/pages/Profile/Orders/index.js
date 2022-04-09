import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './index.scss';

// components
import Price from '../../../components/Price';

// api
import { fetchUserOrders } from "../../../api";

// context
import { useAuth } from "../../../context/AuthContext";
import urls from "../../../urls";

function Orders() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [userOrders, setUserOrders] = useState([]);

  const getUserOrders = async () => {
    try {
      const data = await fetchUserOrders(user);

      setUserOrders(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  if (loading) {
    return "Loading...";
  }

  return (
    <section className="profile-orders">
      <div className="profile-orders__wrapper">

        <h1 className="profile-orders-title">My Orders</h1>

        <div className="profile-orders__content">

          {userOrders.length > 0 ? (
            <div className="profile-orders__orders">
              {userOrders.map((order, index) => (
                <div key={index} className="profile-orders__orders-holder">
                  <p>
                    <b>Date: </b> {order.date}
                  </p>
                  <p>
                    <b>Address: </b> {order.address}
                  </p>
                  <div className="order">
                    <div className="order__top">
                      <div className="order__top-images">
                        {
                          order.items.map((orderItem, key) => (
                            <Link to={`${urls.productUrls.BASE}/${orderItem.id}`} key={key}>
                              <img src={orderItem?.photos[0]} alt={orderItem.title} key={key} />
                            </Link>
                          ))
                        }
                      </div>
                      <Link to={`${urls.userUrls.ORDERS}/${index}`}>
                        Show Order Detail
                      </Link>
                    </div>
                    <div className="order__bottom">
                      <div className="order__bottom-total">
                        <b>Total: </b> <Price>{order.totalPrice}</Price>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (<p className="no-order">No orders</p>)}
        </div>

      </div>
    </section>
  );
}

export default Orders;
