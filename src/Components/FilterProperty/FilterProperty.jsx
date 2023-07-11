import './FilterProperty.css'

export function FilterProperty({property, handleFilter}){
    return <button className="filter-property" onClick={handleFilter}>{property}</button>
}