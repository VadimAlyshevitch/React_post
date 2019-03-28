import React from 'react'

export class Post extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <article className="media new-post">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={this.props.image} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.author}</strong> <small>@johnsmith</small> <small>31m</small>
              <br />
             {this.props.text}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-reply" /></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet" /></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-heart" /></span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete" />
        </div>
      </article>
      
    }
}