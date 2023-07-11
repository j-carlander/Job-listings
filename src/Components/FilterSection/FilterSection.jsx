import { FilterProperty } from "../FilterProperty/FilterProperty";
import './FilterSection.css'

export function FilterSection({role, level, languages, tools, handleFilter}){
    return (
        <section className="filter-section">
            {role && <FilterProperty property={role} handleFilter={() => {
                handleFilter.setRoleFilter(prev => !prev.includes(role) ? [...prev, role] : [...prev])
            }}/>}
            {level && <FilterProperty property={level} handleFilter={() => {
                handleFilter.setLevelFilter(prev => !prev.includes(level) ? [...prev, level] : [...prev])
            }} />}
            {languages.length >= 1 && languages.map(language => <FilterProperty property={language} key={language} handleFilter={() => {
                handleFilter.setLanguageFilter(prev => !prev.includes(language) ? [...prev, language] : [...prev])
            }} />)}
            {tools.length >= 1 && tools.map(tool => <FilterProperty property={tool} key={tool} handleFilter={() => {
                handleFilter.setToolFilter(prev => !prev.includes(tool) ? [...prev, tool] : [...prev])
            }}/>)}
        </section>
    )
}