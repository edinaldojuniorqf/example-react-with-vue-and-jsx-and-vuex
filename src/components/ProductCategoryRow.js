export default {
    props: ['category'],

    render () {
        const category = this.category;
        return (
        <tr>
            <th colSpan="2">
            {category}
            </th>
        </tr>
        );
    }
}