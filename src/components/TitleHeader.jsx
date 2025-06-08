const TitleHeader = ({ title, sub }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            {sub && (
                <div className="hero-badge text-white-50">
                    <p>{sub}</p>
                </div>
            )}
            <div className="font-semibold md:text-5xl text-3xl text-center text-white-50">
                {title}
            </div>
        </div>
    );
};

export default TitleHeader;
