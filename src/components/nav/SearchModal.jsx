import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Modal from 'react-modal';


const SearchModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
        const [filteredData, setFilteredData] = useState([]);
    
        const openModal = () => {
            setIsModalOpen(true);
        };
    
        const closeModal = () => {
            setIsModalOpen(false);
        };
    
        const handleSearch = (e) => {
            const query = e.target.value;
            setSearchQuery(query);
    
            // Filter the MainNavData
            const mainNavFiltered = MainNavData.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
    
            // Filter the secNavData, including nested submenus and menusubL
            const secNavFiltered = secNavData.flatMap(item => {
                return item.submenu
                    ? item.submenu.flatMap(subItem => {
                        return subItem.menusubL
                            ? subItem.menusubL.filter(menuItem =>
                                menuItem.name.toLowerCase().includes(query.toLowerCase())
                            ).map(filteredItem => ({
                                ...filteredItem,
                                parentName: subItem.name, // Add parent submenu name for context
                                parentLink: subItem.link
                            }))
                            : [];
                    })
                    : [];
            });
    
            setFilteredData([...mainNavFiltered, ...secNavFiltered]);
        };
    

    return (
        <div>
            <div className={`flex items-center cursor-pointer`} onClick={openModal}>
                <FaSearch className='h-6 w-auto' />
            </div>



            {/* Modal for Search */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal-content"
                overlayClassName="modal-overlay"
                closeTimeoutMS={200}
            >
                <div className="flex justify-center items-center bg-gray-200 bg-opacity-70 fixed inset-0 z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-4">
                        <h2 className="text-xl font-semibold mb-4">Search</h2>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="text-black-500 h-8 w-full mb-4 p-2 rounded"
                            placeholder="Search..."
                        />
                        <ul className="max-h-60 overflow-y-auto">
                            {filteredData.length === 0 && searchQuery ? (
                                <li>No results found</li>
                            ) : (
                                filteredData.map((item, index) => (
                                    <li key={index}>
                                        {item.parentName ? (
                                            <a href={item.link} className="block py-1 text-blue-500 hover:text-blue-700">
                                                {item.parentName} - {item.name}
                                            </a>
                                        ) : (
                                            <a href={item.link} className="block py-1 text-blue-500 hover:text-blue-700">
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))
                            )}
                        </ul>
                        <div className="mt-4 text-right">
                            <button onClick={closeModal} className="bg-red-600 text-white px-4 py-2 rounded">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SearchModal