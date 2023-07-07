import './JobDescription.css'

export function JobDescription({ position, postedAt, contract, location }) {
  return (
    <section className="job-description">
      <h2 className="job-title">{position}</h2>
      <ul className="job-details-list">
        <li>{postedAt}</li>
        <li>{contract}</li>
        <li>{location}</li>
      </ul>
    </section>
  );
}
