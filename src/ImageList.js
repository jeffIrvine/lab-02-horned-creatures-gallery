import React, { Component } from 'react'
import images from './Data.js'
import ImageListItem from './ImageListItem.js'

export default class ImageList extends Component {
    render() {
        return (
            <div className='image-div'>
                {
                    images.map((item, i) => {
                        return <ImageListItem 
                        url={item.url}
                        alt={item.title}
                        title={item.title} 
                        key={i}
                        />
                    })

                }
            </div>
        )
    }
}
