import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import ListNews from './components/ListNews'


const keyApi = 'f4aa2fc529d644c2807b99eece894c47'


class App extends Component {
  state = {
    news: [],
    loaded: true,
  }

  getNewsApi = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=${keyApi}`;
    const response = await fetch(url);
    const news = await response.json()

    this.setState({
      news: news.articles,
      loaded: false
    })
  }

  componentDidMount() {
    this.getNewsApi()
  }

  render() {
    return (
      <Fragment>
        <Header
          title='News React API'
          getNewsApi={this.getNewsApi} />
        <main className='grey lighten-3'>
          <div className='container news-container'>
            <ListNews
              news={this.state.news}
              loaded={this.state.loaded} />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
