import { FilterProperty } from "../FilterProperty/FilterProperty";
import './FilterSection.css'

export function FilterSection({role, level, languages, tools, handleFilter}){
    return (
        <section className="filter-section">
            {role && <FilterProperty property={role} handleFilter={() => {
                handleFilter.setRoleFilter(prev => [...prev, role])
            }}/>}
            {level && <FilterProperty property={level} handleFilter={() => {
                handleFilter.setLevelFilter(prev => [...prev, level])
            }} />}
            {languages.length >= 1 && languages.map(language => <FilterProperty property={language} key={language} handleFilter={() => {
                handleFilter.setLanguageFilter(prev => [...prev, language])
            }} />)}
            {tools.length >= 1 && tools.map(tool => <FilterProperty property={tool} key={tool} handleFilter={() => {
                handleFilter.setToolFilter(prev => [...prev, tool])
            }}/>)}
        </section>
    )
}