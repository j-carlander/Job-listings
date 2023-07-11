import closeIcon from "../../../images/icon-remove.svg";
import './ActiveFilters.css'

export function ActiveFilters({roles, levels, languages, tools, handleFilter}) {

    if(roles.length == 0 && levels.length == 0 && languages.length == 0 && tools.length == 0) return <></>

    return (
      <div className="active-filters-container">
       <section className="active-filters-section">{
       roles.length > 0 && roles.map((filter) => (
          <div key={filter} className="active-filter">
            {filter}
            <button className="clear-filter-btn" onClick={()=>{
                handleFilter.setRoleFilter(prev => prev.filter(role => role !== filter))
              }}>{<img src={closeIcon} alt="close" />}</button>
          </div>
        ))}
        {levels.length > 0 && levels.map((filter) => (
            <div key={filter} className="active-filter">
              {filter}
              <button className="clear-filter-btn" onClick={()=>{
                handleFilter.setLevelFilter(prev => prev.filter(level => level !== filter))
              }}>{<img src={closeIcon} alt="close" />}</button>
            </div>
          ))
        }
        {languages.length > 0 && languages.map((filter) => (
            <div key={filter} className="active-filter">
              {filter}
              <button className="clear-filter-btn" onClick={()=>{
                handleFilter.setLanguageFilter(prev => prev.filter(language => language !== filter))
              }}>{<img src={closeIcon} alt="close" />}</button>
            </div>
          ))
        }
        {tools.length > 0 && tools.map((filter) => (
            <div key={filter} className="active-filter">
              {filter}
              <button className="clear-filter-btn" onClick={()=>{
                handleFilter.setToolFilter(prev => prev.filter(tool => tool !== filter))
              }}>{<img src={closeIcon} alt="close" />}</button>
            </div>
          ))
        }
        </section> 
        <button className="clear-all-filters-btn" onClick={() => {
            handleFilter.setLanguageFilter([])
            handleFilter.setLevelFilter([])
            handleFilter.setToolFilter([])
            handleFilter.setRoleFilter([])
        }}>Clear</button>
      </div>
    );

}
