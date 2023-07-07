import './CardHeader.css'

export function CardHeader({company, featured, newlyCreated}){
    return (
        <header className="card-header">
            <h3 className="company-name">{company}</h3>
            {newlyCreated && <p className="newly-created">NEW!</p>}
            {featured && <p className="featured">FEATURED</p>}
        </header>
    )
}