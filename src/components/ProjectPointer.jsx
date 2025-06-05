const ProjectPointer = ({ label = 'Projects', onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                mt-4 px-5 py-2
                rounded-lg
                bg-[#18181B] text-white-50
                text-sm md:text-base font-medium
                border border-black-50 hover:bg-[#1f1f23]
                transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-white-50"
        >
            {label}
        </button>
    );
};

export default ProjectPointer;
