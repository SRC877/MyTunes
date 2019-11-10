import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import SearchBox from "./Components/SearchBox";
import Listing from "./Components/Listing";

// production Itunes Connect API
import search from "./api/search";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      isFetching: false,
      query: ""
    };
  }

  async loadNextPage() {
    if (this.state.isFetching) {
      console.log("already fetching");
      return;
    }

    this.setState({ isFetching: true });

    const newItems = await search({
      query: this.state.query
    });

    this.setState({
      isFetching: false,
      items: [...this.state.items, ...newItems]
    });
  }

  async componentDidMount() {
    await this.loadNextPage();
  }

  handleSearchChange(text) {
    this.setState(
      {
        query: text,
        items: []
      },
      () => {
        this.loadNextPage();
      }
    );
  }

  handleEndReached() {
    this.loadNextPage();
  }

  render() {
    const { items, isFetching } = this.state;

    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center'}}>MyTunes</Text>
        <SearchBox onChange={text => this.handleSearchChange(text)} />
        {isFetching && items.length === 0 ? (
          <ActivityIndicator />
        ) : (
          <Listing items={items} onEndReached={() => this.handleEndReached()} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 10,
    paddingTop: 50
  }
});
