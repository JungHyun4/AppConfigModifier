import React from 'react'

const SbItem = ({ item }) => {
    return (
        <div>
            <div>{item.menuNm}</div>
            <div>
                {item.childrens.map((child) => (
                    <SbItem item={child} />
                ))}
            </div>
        </div>
    )
}

export default SbItem