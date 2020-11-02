import React, { Component } from 'react';
import io from 'socket.io-client';
import api from '../../services/api';

import './Stories.css';

class Stories extends Component {
  state = {
    feed: [],
  };

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
  };

  render() {
    return (
      <section className="stories">
        <figure>
          <picture className="post">
            {this.state.feed.map(post => (
              <img
                key={post._id}
                src={`http://localhost:3333/files/${post.image}`}
                alt={post.author}
                title={post.author}
              />
            ))}
          </picture>
        </figure>
      </section>
    );
  }
}

export default Stories;
