import { FilterProperty } from "../FilterProperty/FilterProperty";
import './FilterSection.css'

export function FilterSection({role, level, languages, tools}){
    return (
        <section className="filter-section">
            {role && <FilterProperty property={role} />}
            {level && <FilterProperty property={level} />}
            {languages.length >= 1 && languages.map(language => <FilterProperty property={language} />)}
            {tools.length >= 1 && tools.map(tool => <FilterProperty property={tool} />)}
        </section>
    )
}