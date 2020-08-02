import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ["电影1", "电影2", "电影3"]
    };
  }

  addMovies() {
    this.setState({
      movies: ["电影0", ...this.state.movies]
    })
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {
            this.state.movies.map((item, index) => {
              return <li key={item}>{item}</li> 
            })
          }
        </ul>
        <button onClick={() => this.addMovies()}>添加电影</button>
      </div>
    )
  }
}
