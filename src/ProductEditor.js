import React, { Component } from 'react';

export class ProductEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: props.product.id || '',
                name: props.product.name || '',
                category: props.product.category || '',
                price: props.product.price || ''
            }
        }
    }

    handleChange = (event) => {
        event.persist();
        this.setState(state => state.formData[event.target.name] = event.target.value);
    };

    handleClick = (event) => {
        this.props.saveCallback(this.state.formData);
    };

    render() {
        return (
            <div className="m-2">
                <div className="form-group">
                    <label htmlFor="input-id">ID</label>
                    <input type="text" className='form-control' id='input-id' name='id' disabled
                    value={ this.state.formData.id } onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-name">Name</label>
                    <input type="text" className='form-control' id='input-name' name='name' disabled
                           value={ this.state.formData.name } onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-category">Category</label>
                    <input type="text" className='form-control' id='input-category' name='category' disabled
                           value={ this.state.formData.category } onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-price">Price</label>
                    <input type="text" className='form-control' id='input-price' name='price' disabled
                           value={ this.state.formData.price } onChange={ this.handleChange }/>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary m-1" onClick={ this.handleClick }>Save</button>
                    <button className="btn btn-secondary" onClick={ this.props.cancelCallback }>Cancel</button>
                </div>
            </div>
        );
    };
}