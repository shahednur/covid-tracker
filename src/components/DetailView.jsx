import React from 'react'
import { FadeLoader } from 'react-spinners';
import Graph from './Graph';


const totalKey = ['confirmed', 'deaths', 'recovered'];

const DetailView = (props) => {
    const {
        location:{country, province, latest},
        onClickClose,
        isLoading
    } = props;
    let title = country;
    if(province !== '' && province !== country){
        title = `${province}, ${country}`;
    }
    const totalElements = totalKey?.map(key => {
        const count = latest[key];
        return (
            <li className="relative" id="sidenavSecEx3" key={key}>
                  <div href='/' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <div className="shrink-0">
                            <span>{key}</span>
                        </div>
                        <div className="grow">
                            <p className="text-sm font-semibold text-blue-600 float-right mr-6">{count}</p>
                        </div>
                  </div>
            </li>
        );
    });
    return (
        <div className="details-view h-screen">
            <div className="details-view-close" onClick={onClickClose}>&times;</div>
            <div className="details-view-content">
                <h4 className="title is-4">{title}</h4>
                <ul className="relative px-1">
                    {isLoading?<FadeLoader />:totalElements}
                </ul>
                <Graph totalKey={totalKey} />
            </div>
        </div>
    )
}

export default DetailView