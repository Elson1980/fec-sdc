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
                    <a onClick={() =>{getMenu2(category.id, category.name)} } className='catContainer' key={category.id}>
                        {category.name}
                        {/* <button onClick={() =>{getMenu2(category.id, category.name)} }>more</button> */}
                    </a>
                )}
                <div className='bottomMenu'>
                    <div className="catContainer">Coupons</div>
                    <div className='sale' >View All Sale</div>
                    <div className='sale' >View all Clearance</div>
                    <div className='catContainer'>Weekly Add</div>
                </div>
            </div>
        </>
    )
} else if (currentMenu === 'menu2'){
    return (
        <>
            <div className='menu'>
                <div className='backContainer'>
                    <a onClick={()=> goBackMenu1(lastMenu, lastMenuId, lastMenuName)}>Main Menu</a>
                </div>
                <div href=''>show all {parentMenuName}</div>
                {categories.map((category) =>
                    <a onClick={() =>{getMenu3(category.id, category.name)}} className='catContainer' key={category.id}>
                        {category.name}
                        {/* <button onClick={() =>{getMenu3(category.id, category.name)}}>more</button> */}
                    </a>
                )}
                <div className='bottomMenu'>
                    <div className="catContainer">Coupons</div>
                    <div className='sale' >View All Sale</div>
                    <div className='sale' >View all Clearance</div>
                    <div className='catContainer'>Weekly Add</div>
                </div>
            </div>
        </>
    )
} else if (currentMenu === 'menu3'){
    console.log('lastMenuName from dropDown: ' , lastMenuName)
    return (
        <>
            <div className='menu'>
                <div className='backContainer'>
                    <a onClick={()=> goBackMenu2(lastMenu, lastMenuId, parentMenuName)} >Back</a>
                </div>
                <div href=''>show all {parentMenuName}</div>
                {categories.map((category) => 
                    <a href=''className='catContainer' key={category.id}>
                        {category.name}
                    </a>
                )}
                <div className='bottomMenu'>
                    <div className="catContainer">Coupons</div>
                    <div className='sale' >View All Sale</div>
                    <div className='sale' >View all Clearance</div>
                    <div className='catContainer'>Weekly Add</div>
                </div>
            </div>
        </>
    )
}
}

}

export default DropDown;