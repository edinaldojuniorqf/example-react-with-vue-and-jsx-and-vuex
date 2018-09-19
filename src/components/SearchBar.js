export default {
  props: ['filterText', 'inStockOnly', 'filterTextInput', 'inStockChange'],

  methods: {
    handleFilterTextInput (e) {
      // this.filterTextInput(e.target.value)
      this.$emit('onFilterTextInput', e.target.value)
    },
    handleInStockChange (e) {
      // this.inStockChange(e.target.checked)
      this.$emit('onIsStockChange', e.target.checked)
    }
  },
  
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.filterText}
          onInput={this.handleFilterTextInput}
        />
        <p>
          <label>
            <input type="checkbox" checked={this.inStockOnly}
              onChange={this.handleInStockChange} />
            {' '}
            Only show products in stock
          </label>
        </p>
      </form>
    );
  }
}