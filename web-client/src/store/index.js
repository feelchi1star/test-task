import { createContext, useContext, useEffect, useState } from "react";
import { dataFetcher } from "../utils/fetcher";

const AppContext = createContext(null);

export default function AppContextWrapper({ children }) {
  const [sectorsData, setSectorsData] = useState([]);

  async function fetchSectorData() {
    const data = await dataFetcher("/sectors", undefined, undefined);
    setSectorsData(data);
  }

  useEffect(() => {
    fetchSectorData();
  }, []);

  return (
    <AppContext.Provider value={{ sectorsData }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
