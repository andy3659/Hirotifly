const domParser = require("react-native-html-parser").DOMParser;
const test = async () => {
  const data = await fetch(
    "https://www.youtube.com/results?search_query=ado+odo"
  );
  const doc = domParser.parseFromString(data, "text/html");
  console.log(doc);
};
test();
