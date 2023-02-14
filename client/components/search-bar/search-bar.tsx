import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import SearchIcon from "../../assets/search-icon";
import musicApi from "../../API/music-api";
import useSearch from "../../stores/useSearch";
function SearchBar() {
  const setSearchResult = useSearch((state) => state.setSearchResult);
  const setIsLoading = useSearch((state) => state.setIsLoading);

  const searchHandler = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    setSearchResult([]);
    setIsLoading(true);
    const keyword = e.nativeEvent.text;
    const data = await musicApi.searchMusic(keyword);
    if (data) {
      setSearchResult(data);
      setIsLoading(false);
    }
  };

  return (
    <>
      <View style={style.container}>
        <TextInput
          style={style.textInput}
          autoFocus={true}
          placeholder="Search"
          onSubmitEditing={(e) => searchHandler(e)}
        />
        <SearchIcon />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginTop: 5,
    backgroundColor: "#ffbf00",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    color: "#36393e",
    height: 24,
    flex: 1,
    fontSize: 14,
  },
});

export default SearchBar;
