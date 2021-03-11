import FilterForm from './FilterForm'
import FruitList from './FruitList'

export default function FilterContainer() {
    // Shared state will live here

    return (
        <div className='container'>
            <FilterForm />
            <FruitList />
        </div>
    )
}