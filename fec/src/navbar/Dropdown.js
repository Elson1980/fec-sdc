import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropDown = (props) =>{
    const { parentMenuId, 
            parentMenuName, 
            parentMenu, 
            currentMenu, 
            categories, 
            getMenu2, 
            getMenu3,
            goBackMenu1,
            goBackMenu2,
            setLastMenuName,
            lastMenu,
            lastMenuId,
            lastMenuName,
            open
        } = props;
        
if(open === true){
if(currentMenu === 'menu1'){
    return (
        <>
            <div className='menu'>
                {categories.map((category) => 
                    <div className='catContainer' key={category.id}>
                        {category.name}
                        <button onClick={() =>{getMenu2(category.id, category.name)} }>more</button>
                    </div>
                )}
            </div>
        </>
    )
} else if (currentMenu === 'menu2'){
    return (
        <>
            <div className='menu'>
                <div className='backContainer'>
                    <button onClick={()=> goBackMenu1(lastMenu, lastMenuId, lastMenuName)}>back</button>
                    <div>Main Menu</div>
                </div>
                <a href=''>show all {parentMenuName}</a>
                {categories.map((category) =>
                    <div className='catContainer' key={category.id}>
                        {category.name}
                        <button onClick={() =>{getMenu3(category.id, category.name)} }>more</button>
                    </div>
                )}
            </div>
        </>
    )
} else if (currentMenu === 'menu3'){
    console.log('lastMenuName from dropDown: ' , lastMenuName)
    return (
        <>
            <div className='menu'>
                <div className='backContainer'>
                    <button onClick={()=> goBackMenu2(lastMenu, lastMenuId, parentMenuName)} >back</button>
                </div>
                <a href=''>show all {parentMenuName}</a>
                {categories.map((category) => 
                    <a href=''className='catContainer' key={category.id}>
                        {category.name}
                    </a>
                )}
            </div>
        </>
    )
}
}

}

export default DropDown;