import React from 'react'
import SbItem from './SbItem'
import menuData from '../sidebar/menuData.json'

const Sb = ({ items }) => {

    const nest = (menuData, menuId = "ROOT", link = 'pmenuId') =>
        menuData.filter(item => item[link] === menuId)
            .map(item => ({ ...item, childrens: nest(menuData, item.menuId) }));
    const tree = nest(menuData);

    return (
        <div>
            {tree.map((subItem, index) =>
                <SbItem item={subItem} key={index} />
            )}
        </div>
    )
}

export default Sb