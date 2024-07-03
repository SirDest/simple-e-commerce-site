export const getItemFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      return null;
    }
  }
  return null;
};
