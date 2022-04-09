const urls = {
  homeUrls: {
    BASE: '/',
  },
  productUrls: {
    BASE: '/products',
    DETAILS: '/products/:product_id',
  },
  userUrls: {
    PROFILE: '/profile',
    ORDERS: '/profile/orders',
    ORDER_DETAIL: '/profile/orders/:order_id',
    COMBINE: '/combine',
    SIGNIN: '/signin',
    SIGNUP: '/signup',
  },
  basketUrls: {
    BASE: '/basket',
  },
  adminUrls: {
    BASE: '/admin',
    ORDERS: '/admin/orders',
    PRODUCTS: '/admin/products',
    PRODUCT_EDIT: '/admin/products/:product_id',
    PRODUCT_NEW: '/admin/products/new',
  },
};

export default urls;