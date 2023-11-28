import React, {useEffect, useState} from 'react';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    return (

        <div className="overlap">
            <div className="group">
                <img className="screen-shot" alt="Screen shot" src="screen-shot-1444-01-20-at-3-04-1.png" />
            </div>
            <div className="rectangle" />
            <div className="overlap-wrapper">
                <div className="overlap-group">
                    <div className="text-wrapper">Search</div>
                    <img className="search" alt="Search" src="search-1.svg" />
                    <div className="text-wrapper-2">Filter</div>
                    <img className="line" alt="Line" src="line-1.svg" />
                    <img className="ic-filter-list" alt="Ic filter list" src="ic-filter-list-48px-1.svg" />
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">Search</div>
                    </div>
                </div>
            </div>
            <div className="group-2">

                <div className="text-wrapper-4">Home</div>

                <div className="text-wrapper-5">Map</div>
            </div>
        </div>

    );
}

export default Navbar;