const localSave = async (key: string, value: any): Promise<void> => {
   try{
    localStorage.setItem(key, JSON.stringify(value));
   } catch (error) {
    console.log(error);
   }
};

const localGet = async (key: string): Promise<any> => {
  try{
   return JSON.parse(localStorage.getItem(key) || '{}');
  } catch (error) {
   console.log(error);
  }
};

export { localSave, localGet };