
const SHOW_LIMIT = 8;

export const fetchProductList = async (page = 0) => {
  const productsData = JSON.parse(localStorage.getItem("products")) || [];

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = [];

      let start = page === 0 ? page * SHOW_LIMIT : (page - 1) * SHOW_LIMIT;
      let limit = page === 0 ? SHOW_LIMIT : page * SHOW_LIMIT;

      for (start; start < limit; start++) {
        if (productsData[start]) {
          products.push(productsData[start]);
        }
      }

      resolve({
        pages:
          productsData.length > SHOW_LIMIT
            ? Math.ceil(productsData.length / SHOW_LIMIT)
            : 0,
        currentPage: page,
        products: products,
      });
    }, 300);
  });

  return data;
};

export const fetchProduct = async (product_id) => {
  const productsData = JSON.parse(localStorage.getItem("products")) || [];

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productsData.find((p) => p.id === +product_id);

      if (product) {
        resolve(product);
      } else {
        reject("Product is not found...");
      }
    }, 300);
  });

  return data;
};

export const fetchRegister = async (values) => {
  const usersData = JSON.parse(localStorage.getItem("users")) || [];

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const alreadyExistUser = usersData.find(
        (user) => user.email === values.email
      );

      if (alreadyExistUser) {
        reject("Already exist user!");
      } else {
        usersData.push(values);
        localStorage.setItem("users", JSON.stringify(usersData));

        resolve({
          email: values.email,
          user: values.user,
        });
      }
    }, 300);
  });

  return data;
};

export const fetchLogin = async (values) => {
  const usersData = JSON.parse(localStorage.getItem("users")) || [];

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const isCorrectCredential = usersData.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (isCorrectCredential) {
        resolve({
          email: isCorrectCredential.email,
          user: isCorrectCredential.user,
        });
      } else {
        reject("Wrong email or password");
      }
    }, 300);
  });

  return data;
};

export const fetchMe = async () => {
  const currentUserData =
    JSON.parse(localStorage.getItem("current-user")) || null;

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentUserData) {
        resolve(currentUserData);
      } else {
        reject(false);
      }
    }, 300);
  });

  return data;
};

export const postOrder = async (input) => {
  const usersData = JSON.parse(localStorage.getItem("users")) || null;

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = usersData?.findIndex(
        (user) => user.email === input.user.email
      );

      if (usersData && userIndex !== -1) {
        usersData[userIndex].orders = [
          {
            address: input.address,
            date: new Date().toLocaleString("tr", "DD/MM/YYYY"),
            items: input.items,
            totalPrice: input.items.reduce((acc, obj) => acc + obj.price * obj.quantity, 0),
          },
          ...usersData[userIndex].orders,
        ];

        localStorage.setItem("users", JSON.stringify(usersData));

        resolve(true);
      } else {
        reject(false);
      }
    }, 300);
  });

  return data;
};

export const fetchUserOrders = async (user) => {
  const usersData = JSON.parse(localStorage.getItem("users")) || null;

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = usersData?.findIndex((u) => u.email === user.email);

      if (
        usersData &&
        userIndex !== -1 &&
        usersData[userIndex]?.orders?.length > 0
      ) {
        resolve(usersData[userIndex].orders);
      } else {
        reject(false);
      }
    }, 300);
  });

  return data;
};

export const fetchUserOrderDetail = async (user, order_id) => {
  const usersData = JSON.parse(localStorage.getItem("users")) || null;

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = usersData?.findIndex((u) => u.email === user.email);

      if (
        usersData &&
        userIndex !== -1 &&
        usersData[userIndex]?.orders?.length > 0 &&
        usersData[userIndex]?.orders[order_id]
      ) {
        resolve(usersData[userIndex]?.orders[order_id]);
      } else {
        reject(false);
      }
    }, 300);
  });

  return data;
}

export const fetchOrders = async () => {
};

export const deleteProduct = async (productId) => {
};

export const updateProduct = async (input, productId) => {
};
