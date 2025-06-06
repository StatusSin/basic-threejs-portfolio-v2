import { Link } from 'react-router-dom';

const ProjectPointer = ({
                            label  = 'Projects',
                            target = '/',
                            className = '',
                        }) => (
    <Link
        to={target}
        className={`
      inline-block mt-4 px-5 py-3 rounded-lg bg-[#18181B] text-white-50
      text-sm md:text-base font-medium border border-black-50
      hover:bg-[#1f1f23] transition-colors duration-300
      focus:outline-none focus:ring-2 focus:ring-white-50
      ${className}
    `}
    >
        {label}
    </Link>
);

export default ProjectPointer;
