import React, { Component } from 'react';
import api from '../../services/api';
import io from 'socket.io-client';

import './History.css';

class History extends Component {
  state = {
    feed: [],
  }

  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get('posts');
    
    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });
  }

  render() {
    return (
      <section className="history-list">
        <article>
          <div className="history">
          { this.state.feed.map(post => (
            <img key={post._id} src={`http://localhost:3333/files/${post.image}`} />
            ))}
          </div>
        </article>
      </section>
    );
  }
}

export default History;