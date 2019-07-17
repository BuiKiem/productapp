import {connect} from "react-redux";
import {startEditingProduct, startEditingSupplier} from "./stateAction";
import {deleteProduct, deleteSupplier} from "./modelActionCreators";
import {PRODUCTS, SUPPLIERS} from "./dataTypes";


export const TableConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData) => ({
        products: storeData.modelData[PRODUCTS],
        suppliers: storeData.modelData[SUPPLIERS].map(supplier => ({
            ...supplier,
            // products: supplier.products.map(id => storeData.modelData[PRODUCTS]
            //     .find(product => product.id === Number(id) || id)
            //     .map(val => val.name || val)
            // ),
            products: supplier.products.map(id =>
                storeData.modelData[PRODUCTS].find(p => p.id === Number(id)) || id)
                .map(val => val.name || val)
        })),
    });

    const mapDispatchToProps = {
        editCallback: dataType === PRODUCTS ? startEditingProduct : startEditingSupplier,
        deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier,
    };

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};
