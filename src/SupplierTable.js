import React from 'react';
import {SupplierTableRow} from "./SupplierTableRow";

export const SupplierTable = (props) => {
    return (
        <table className="table table-sm table-striped table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Products</th>
                <th/>
            </tr>
            </thead>
            <tbody>
            {
                props.suppliers.map(s =>
                    <SupplierTableRow
                        supplier={s} key={s.id}
                        editCallback={props.editCallback}
                        deleteCallback={props.deleteCallback}
                    />
                )
            }
            </tbody>
        </table>
    );
};
