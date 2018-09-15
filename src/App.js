import FilterableProductTable from './components/FilterableProductTable'

export default {
  name: 'app',
  props: ['products'],

  render () {
    return (
      <div>
        <FilterableProductTable products={this.products} />
      </div>
    )
  }
}
