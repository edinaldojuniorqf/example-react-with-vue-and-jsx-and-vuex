import { connect } from 'vuex-connect'
import ProductTable from './ProductTable';

export default connect({
    stateToProps: {
        filterText: state => state.filterText,
        inStockOnly: state => state.inStockOnly,
        products: state => state.products
    }
})(ProductTable)