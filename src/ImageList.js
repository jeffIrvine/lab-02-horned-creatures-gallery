import React, { Component } from 'react'
import images from './Data.js'
import ImageListItem from './ImageListItem.js'

export default class ImageList extends Component {
    state= {
        filter: '',
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }

    render() {

        const filterData = images.filter((item) => {
            if (!this.state.filter) return true;

            if (item.horns.toString() === this.state.filter || item.keyword === this.state.filter || item.real.toString() === this.state.filter) return true;

            return false
        }); 

        return (

            <div >
                <>
                <select onChange={this.handleChange}>
                    <option value=''>Show All</option>
                    <option value='dragon'>Dragons</option>
                    <option value='lizard'>Lizards</option>
                    <option value='chameleon'>chameleons</option>
                    <option value='mouflon'>mouflon</option>
                    <option value='addax'>addax</option>
                    <option value='markhor'>markhor</option>
                    <option value='unicorn'>unicorn</option>
                    <option value='rhino'>rhino</option>
                    <option value='narwhal'>narwhal</option>
                    <option value='triceratops'>triceratops</option>
                    <option value='unilego'>unilego</option>
                    <option value='1'>1 Horn</option>
                    <option value='2'>2 Horns</option>
                    <option value='3'>3 Horns</option>
                    <option value='100'>100 Horns</option>
                </select>
                {
                    filterData.map((item) => {
                        return <ImageListItem 
                        url={item.url}
                        title={item.title}
                        booger={item.description}
                        horns={item.horns}
                        />
                    })
                }
                </>
            </div>
        )
    }
}
