const TitleHeader = ({ title, sub }) => {
    return (
        <div className = "flex flex-col items-center gap-5">
            <div className = "hero-badge">
                <p>{sub}</p>
            </div>
        </div>
    )
}
export default TitleHeader
