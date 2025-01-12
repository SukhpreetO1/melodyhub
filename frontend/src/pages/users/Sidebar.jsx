import { useState } from 'react';
import { FontAwesomeIcon, NavLink, faPlus, faSwatchbook } from '../../routes/routes.jsx';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isOpen} onClick={handleToggle}>
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="default-sidebar" className={`m-3 w-96 h-screen transition-transform ${isOpen ? 'transform-none' : '-translate-x-full'} sm:translate-x-0 bg-[#121111] rounded-lg`} aria-label="Sidebar">
                <div className='flex justify-between'>
                    <div className='items-center p-4 text-xl text-[#818181] hover:text-white'>
                        <NavLink to="#" className='flex items-center' title="Collapse your library">
                            <FontAwesomeIcon icon={faSwatchbook} className='mr-3' />
                            <h1 className='font-bold text-base'>Your Library</h1>
                        </NavLink>
                    </div>
                    <div className='items-center p-4 text-xl text-[#818181]'>
                        <NavLink to="#" title="Create playlist or folder">
                            <FontAwesomeIcon icon={faPlus} className='hover:text-white' />
                        </NavLink>
                    </div>
                </div>
                <div className='flex flex-col p-4 bg-[#1e1e1e] border-[#818181] m-3 rounded-lg'>
                    <h1 className='text-lg font-medium'>Create your first playlist</h1>
                    <h2 className='text-sm py-1 pb-4'>It&apos;s easy, we&apos;ll help you</h2>
                    <NavLink to="#" className="block py-1 px-2 md:border-0 md:hover:bg-gray-200 border-b-2 md:bg-white md:text-black md:rounded-full md:w-36 md:text-center md:font-medium text-sm">Create Playlist</NavLink>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;