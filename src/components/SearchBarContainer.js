import { connect } from 'vuex-connect'
import SearchBar from './SearchBar';

export default connect({
    stateToProps: {
        filterText: state => state.filterText,
        inStockOnly: state => state.inStockOnly
    },

    mutationsToProps: {
        filterTextInput: 'setFilterText',
        inStockChange: 'setInStockOnly'
    },

    mutationsToEvents: {
        onFilterTextInput: 'setFilterText',
        onIsStockChange: 'setInStockOnly'
    }
})(SearchBar)