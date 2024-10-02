import axios from 'axios';
const API_URL = 'http://localhost:5000/registration';

export const updateCart = async (userId, cartData) => {
  try {
    await axios.patch(`${API_URL}/${userId}`, { cart: cartData,
        totalPrice: cartData.reduce((total, item) => total + item.price * item.quantity, 0),        
     });
  } 
  catch (error) 
  {
    console.error('Error updating cart:', error);
  }
};


// Function to fetch cart data from the backend for a specific user
export const getCart = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data.cart; // Assuming the cart is part of the user data
  } 
  catch (error) {
    console.error('Error fetching cart:', error);
    return [];
  }
};
