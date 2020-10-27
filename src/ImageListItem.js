import React, { Component } from 'react'

export default class ImageListItem extends Component {
    render() {
        return (
            <div className='image-div'>
                <h1>
                    {this.props.title}
                </h1>
                <img className='horned-images' 
                src={this.props.url} 
                alt={this.props.title} />
                <p>
                    {this.props.booger}
                </p>
                <p>
                   Number of horns: {this.props.horns}
                </p>
            </div>
        )
    }
}
