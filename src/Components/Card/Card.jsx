import { CardHeader } from "../CardHeader/CardHeader";
import { FilterSection } from "../FilterSection/FilterSection";
import { JobDescription } from "../JobDescription/JobDescription";
import './Card.css'

export function Card(props){
    return (
    <article className={props.featured ? "job-card card-left-border":"job-card"}>
        <div className="card-logo-container">
            <img src={props.logo} alt="company logo" className="card-logo" />
        </div>
        <div>
        <CardHeader company={props.company} featured={props.featured} newlyCreated={props.new} />
        <JobDescription position={props.position} postedAt={props.postedAt} contract={props.contract} location={props.location} />
        </div>
        <FilterSection role={props.role} level={props.level} languages={props.languages} tools={props.tools} handleFilter={props.handleFilter} />
    </article>
    )
}