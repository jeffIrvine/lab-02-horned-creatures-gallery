import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
        <div className='drop-down'>
            <select onChange={this.props.dropdown}>
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
                <option value='yes'>Real Horns</option>
                <option value='no'>Fake Horns</option>
                <option value='kinda'>Ya but no</option>
            </select>
        </div>
        )
    }
}
