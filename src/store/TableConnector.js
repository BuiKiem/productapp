import {connect} from "react-redux";
import {startEditingProduct, startEditingSupplier} from "./stateAction";
import {deleteProduct, deleteSupplier} from "./modelActionCreators";
import {PRODUCTS} from "./dataTypes";


export const TableConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData) => ({
        products: storeData.modelData[dataType],
        suppliers: storeData.modelData[dataType],
    });

    const mapDispatchToProps = {
        editCallback: dataType === PRODUCTS ? startEditingProduct : startEditingSupplier,
        deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier,
    };

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};
