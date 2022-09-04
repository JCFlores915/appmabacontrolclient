import axios from 'axios';

const axios_localhost = axios.create({

  // baseURL: 'http://localhost/',

  baseURL: 'https://www.dev-mabacontrol.xyz/mabacontrol/maba_venta/ajax/api_cliente.php',
});

export default axios_localhost;