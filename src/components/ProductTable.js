import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default {
    props: ['products', 'filterText', 'inStockOnly'],

    render() {
        const rows = [];
        let lastCategory = null;
        
        this.products.forEach((product) => {
          if (product.name.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1) {
            return;
          }
          if (this.inStockOnly && !product.stocked) {
            return;
          }
          if (product.category !== lastCategory) {
            rows.push(
              <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
          }
          rows.push(
            <ProductRow
              product={product}
              key={product.name} />
          );
          lastCategory = product.category;
        });

        if (rows.length < 1) {
          return (
            <p>Nenhum registro encontrado!!!</p>
          )
        }
    
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
    }
}