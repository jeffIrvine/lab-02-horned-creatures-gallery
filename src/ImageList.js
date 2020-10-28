import React, { Component } from 'react'
import images from './Data.js'
import ImageListItem from './ImageListItem.js'

// .map, drop down, .filter, and 'click listener'


export default class ImageList extends Component {

    render() {

        const filterData = images.filter((item) => {
            if (!this.props.filter) return true;

            if (item.horns.toString() === this.props.filter || item.keyword === this.props.filter || item.real.toString() === this.props.filter) return true;

            return false
        }); 

        return (
                <div className='main'>
                    {
                        filterData.map((item) => {
                            return <ImageListItem 
                            url={item.url}
                            title={item.title}
                            description={item.description}
                            horns={item.horns}
                            real={item.real}
                            />
                        })
                    }
                </div>
        )
    }
}
