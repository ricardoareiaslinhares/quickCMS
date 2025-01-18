import { localGet } from "./localStorage";


const ask2 = async () => {
    const response = await fetch('http://localhost:3001/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log("ask2");
      console.log(data);
};

const ask3 = async () => {
    const response = await fetch('http://back_qcms:3001/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log("ask3");
      console.log(data);
};
const verifyLogin = async () => {
    const token = await localGet('AcessToken_QuickCMS');

    const response = await fetch(`http://${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data);
};


export default verifyLogin;

