export const getItemFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error("Couldn't get Cart... Try refreshing the page", error);
      return null;
    }
  }
  return null;
};
