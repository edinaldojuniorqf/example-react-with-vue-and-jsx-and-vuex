import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default {
  props: ['products'],

  data () {
    return {
      filterText: '',
      inStockOnly: false
    }
  },

  methods: {
    handleFilterTextInput (value) {
      this.filterText = value
    },
    handleInStockChange (inStockOnly) {
      this.inStockOnly = inStockOnly
    }
  },

  render() {
      return (
        <div>
          <SearchBar
            filterText={this.filterText}
            inStockOnly={this.inStockOnly}
            filterTextInput={this.handleFilterTextInput}
            inStockChange={this.handleInStockChange}
          />
          
          <ProductTable products={this.products}
            filterText={this.filterText}
            inStockOnly={this.inStockOnly} />
        </div>
      );
  }
}