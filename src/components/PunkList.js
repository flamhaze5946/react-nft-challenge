import './PunkList.css'
import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData }) => {
    return (
        <div className='punkList'>
            {punkListData.map(punk => (
                <div>
                    <CollectionCard
                        key={punk.id}
                        id={punk.id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default PunkList