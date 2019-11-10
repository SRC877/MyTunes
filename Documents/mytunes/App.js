import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import SearchBox from './Components/SearchBox';
import Listing from './Components/Listing';

// production Spotify APIs
import token from './api/token';
import search from './api/search';

const PAGE = 20;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      offset: 0,
      isFetching: false,
      query: '',
      token: null,
    };
  }

  async refreshToken() {
    const newToken = await token();
    this.setState({
      token: newToken,
    });
  }

  async loadNextPage() {
    if (this.state.isFetching) {
      console.log('already fetching');
      return;
    }

    this.setState({ isFetching: true });

    const newItems = await search({
      query: this.state.query
    });

    console.log(newItems);

    this.setState({
      isFetching: false,
      offset: this.state.offset + PAGE,
      items: [
        ...this.state.items,
        ...newItems,
      ],
    });
  }

  async componentDidMount() {
    await this.refreshToken();
    await this.loadNextPage();
  }

  handleSearchChange(text) {
    this.setState({
      query: text,
      items: [],
      offset: 0,
    }, () => {
      this.loadNextPage();
    });
  }

  handleEndReached() {
    this.loadNextPage();
  }

  render() {
    const { items, isFetching } = this.state;

    return (
      <View style={styles.container}>
        <Text>MyTunes!</Text>
        <SearchBox
          onChange={
            text => this.handleSearchChange(text)
          }
        />
        {
          (isFetching && items.length === 0)
            ? <ActivityIndicator />
            : <Listing
                items={items}
                onEndReached={
                  () => this.handleEndReached()
                }
              />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 50,
  },
});
