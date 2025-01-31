import { localGet } from "./localStorage";



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

