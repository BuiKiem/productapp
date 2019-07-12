import React, {Component} from 'react';

export class SupplierEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: props.supplier.id || '',
                name: props.supplier.name || '',
                city: props.supplier.city || '',
                products: props.supplier.products || [],
            },
        }
    }

    handleChange = (event) => {
        event.persist();
        this.setState(state =>
            state.formData[event.target.name] = event.target.name === 'products'
                ? event.target.value.split(',') : event.target.value)
    };

    handleClick = () => {
        this.props.saveCallback({
            ...this.state.formData,
            products: this.state.formData.products.map(val => Number(val)),
        })
    };

    render() {
        return (
            <div className="m-2">
                <div className="form-group">
                    <label htmlFor="input-id">ID</label>
                    <input type="text" className="form-control" name="id" id="input-id" disabled
                           value={this.state.formData.id} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-name">Name</label>
                    <input type="text" className="form-control" name="name" id="input-name" disabled
                           value={this.state.formData.name} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-city">City</label>
                    <input type="text" className="form-control" name="city" id="input-city" disabled
                           value={this.state.formData.city} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-products">Products</label>
                    <input className="form-control" name="products" id="input-products"
                           value={this.state.formData.products} onChange={this.handleChange}/>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary m-1" onClick={ this.handleClick }>Save</button>
                    <button className="btn btn-secondary" onClick={ this.props.cancelCallback }>Cancel</button>
                </div>
            </div>
        );
    }

}
