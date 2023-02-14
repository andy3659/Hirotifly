import create from "zustand";
import { musicObject } from "../types";
type searchState = {
  isLoading: boolean;
  setIsLoading: (isloading: boolean) => void;
  searchResult: musicObject[];
  setSearchResult: (searchResult: musicObject[]) => void;
};

const useSearch = create<searchState>()((set) => ({
  isLoading: false,
  setIsLoading: (ready: boolean) => set({ isLoading: ready }),
  searchResult: [],
  setSearchResult: (result: musicObject[]) => set({ searchResult: result }),
}));

export default useSearch;
