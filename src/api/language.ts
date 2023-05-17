const BASE_URL: string = import.meta.env.VITE_API_SERVER_BASE_URL;

export const getLanguages = async (keyword: string) => {
  const response = await fetch(`${BASE_URL}/languages?keyword=${keyword}`);
  const data: string[] = await response.json();
  return data;
};
