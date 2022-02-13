import React from 'react'
import { FadeLoader } from 'react-spinners';

const totalKey = ['confirmed', 'deaths', 'recovered'];


const Header = (props) => {
    const { 
        locations, 
        isLoading, 
        selectedLocation, 
        onSelectItem, 
        onDeselectItem 
    } = props;

    function onClickItem(id){
        if(selectedLocation === null) onSelectItem(id);
        else if(selectedLocation.id !== id) onSelectItem(id);
        else onDeselectItem();
    }

    const totalElements = totalKey?.map(key => {
        let total = 0;
        locations?.map(l => {
            total += l.latest[key];
        });
        return (
            <li className="relative" id="sidenavSecEx3" key={key}>
                  <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <div className="shrink-0">
                            <span>{key}</span>
                        </div>
                        <div className="grow">
                            <p className="text-sm font-semibold text-blue-600 float-right mr-6">{total}</p>
                        </div>
                  </div>
            </li>
        );
    });
    const locationarray = locations?.map(location => {
        const { id,country_code, country, province, latest: {confirmed} } = location;
        let title = country;
        if ( province !== '' && province !== country){
            title = `${province}, ${country}`;
        }

        let locationClass = 'list-view-location';
        if(selectedLocation !== null){
            if(location.id === selectedLocation.id){
                locationClass += ' selected';
            }
        }

        return (
            <li className={`relative ${locationClass}`} key={`${id}-${country_code}`} onClick={()=>onClickItem(id)}>
                <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <div className="shrink-0">
                            <span>{title}</span>
                        </div>
                        <div className="grow">
                            <p className="text-sm font-semibold text-blue-600 float-right mr-6">{confirmed}</p>
                        </div>
                </div>
            </li>
    )})
    return (
        <div className="w-80 h-full shadow-md bg-white absolute" id="sidenavSecExample">
            <div className="pt-4 pb-2 px-6">
                <a href="#!">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <img src="https://www.upwork.com/profile-portraits/c1gehurKXwT7ipg2qCsU-fIuzYj7kscj3F1T6QU8Bss9IVk566jb-iC0qhVEjBaTLd" className="rounded-full w-12" alt="MD Nur Uddin" />
                        </div>
                        <div className="grow ml-3">
                            <h1>Covid 19 Tracker</h1>
                            <p className="text-sm font-semibold text-blue-600">by MD Nur Uddin</p>
                        </div>
                    </div>
                </a>
            </div>
            <ul className="relative px-1">
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                        </svg>
                        <span>Total</span>
                    </a>
                </li>
                {totalElements}
            </ul>
            <hr className="my-2" />
            <ul className="block overflow-y-auto h-122 pt-5 pb-4 sticky top-0  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
               {isLoading? <FadeLoader />:locationarray}
            </ul>
        </div>
    )
}

export default Header