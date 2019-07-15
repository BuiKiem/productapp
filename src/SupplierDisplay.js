import React from 'react';
import {SupplierEditor} from "./SupplierEditor";
import {SupplierTable} from "./SupplierTable"
import {connect} from "react-redux";
import {startCreatingSupplier} from "./store/stateAction";
import {SUPPLIERS} from "./store/dataTypes";
import {EditorConnector} from "./store/EditorConnector";
import {TableConnector} from "./store/TableConnector";


const ConnectedEditor = EditorConnector(SUPPLIERS, SupplierEditor);
const ConnectedTable = TableConnector(SUPPLIERS, SupplierTable);

const mapStateToProps = (storeData) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData.suppliers.find(s => s.id === storeData.stateData.selectedId) || {}
});

const mapDispatchToProps = {
    createSupplier: startCreatingSupplier,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const SupplierDisplay = connectFunction(

    (props) => {
        if (props.editing) {
            return <ConnectedEditor key={props.selected.id} />
        } else {
            return (
                <div className="m-2">
                    <ConnectedTable />
                    <div className="text-center">
                        <button className="btn btn-primary m-1" onClick={props.createSupplier}>
                            Create Supplier
                        </button>
                    </div>
                </div>
            );
        }
    }
);
