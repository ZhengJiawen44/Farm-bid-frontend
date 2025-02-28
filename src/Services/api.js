import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api`; 

// User registration
export const register = (data) => axios.post(`${API_URL}/auth/register`, data);

// User login
export const login = (data) => axios.post(`${API_URL}/auth/login`, data);

// Forgot Password
export const forgotPassword = async (email) => {
  const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
  return response;
};

// Reset Password
export const resetPassword = async (token, newPassword) => {
  const response = await axios.post(`${API_URL}/auth/reset-password`, { 
    token, 
    newPassword 
  });
  return response;
};

// Get nearby farmers (for buyers)
export const getNearbyFarmers = (location) => {
  return axios.post(`${API_URL}/farmers/nearby`, { location });
};

// Get nearby buyers (for farmers)
export const getNearbyBuyers = (location) => {
  return axios.post(`${API_URL}/buyers/nearby`, { location });
};

// Featured farms logic 
export const getFeaturedFarms = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs/featured-farms`);
    return response.data;
  } catch (error) {
    console.error('Error fetching featured farms:', error);
    throw error;
  }
};

export const createAuctionTransaction = (auctionId) => 
  axios.post(`${API_URL}/transactions/auction`, { auctionId });

export const createContractTransaction = (contractId) => 
  axios.post(`${API_URL}/transactions/contract`, { contractId });

export const getSellerTransfers = () => 
  axios.get(`${API_URL}/seller/transfers`);

//stripe 

export const createPaymentIntent = (data) => axios.post(`${API_URL}/payments/create-payment-intent`, data);

export const requestPayout = (data) => axios.post(`${API_URL}/payout/request`, data);

export const createConnectedAccount = (data) => axios.post(`${API_URL}/payout/create-connected-account`, data);

export const getSellerBalance = () => axios.get(`${API_URL}/payout/seller-balance`);

export const addBankAccount = (data) => axios.post(`${API_URL}/payout/add-bank-account`, data);

// Export all functions
const api = {
  register,
  login,
  forgotPassword,
  resetPassword,
  getFeaturedFarms,
  getNearbyFarmers,
  getNearbyBuyers,
  createAuctionTransaction,
  createContractTransaction,
  getSellerTransfers,
  createPaymentIntent,
  requestPayout,
  createConnectedAccount,
  getSellerBalance
};

export default api;
