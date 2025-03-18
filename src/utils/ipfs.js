import axios from 'axios';

export async function fetchFromIPFS(path) {
  if (!path) {
    throw new Error('Missing IPFS path parameter');
  }

  // const url = `https://teal-nearby-swift-686.mypinata.cloud/ipfs/${path}`;  //dev
  // const url = `https://api.compoundcrypto.finance/ipfs/${path}`; //prod
  const url = `https://backend.mypinata.cloud/ipfs/${path}`; //stage

  try {
    const response = await axios.get(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}
