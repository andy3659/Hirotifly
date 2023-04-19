import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/screen-container/screen-container";
import SearchBar from "../components/search-bar/search-bar";
import SearchResult from "../components/search-result/search-result";
import useSearch from "../stores/useSearch";
function SearchScreen() {
  const setSearchResult = useSearch((state) => state.setSearchResult);
  useEffect(() => {
    setSearchResult([]);
  }, []);
  return (
    <Screen style={styles.container}>
      <SearchBar />
      <SearchResult />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1E21",
  },
});

export default SearchScreen;
