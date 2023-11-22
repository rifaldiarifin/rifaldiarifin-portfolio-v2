export const Ac1 = ({ vl = '' }) => {
    return <span className="accent-col-1 font-weg-600">{vl}</span>
}
export const Ac2 = ({ vl = '' }) => {
    return <span className="accent-col-1 font-weg-700">{vl}</span>
}

export const Hlnk = ({to}) => {
    return <a href={to} target="_blank" className="hyperlink" rel="noreferrer">{to}</a>
}