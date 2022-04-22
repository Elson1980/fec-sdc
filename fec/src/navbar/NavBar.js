import React, { useEffect, useState } from "react";
import Dropdown from './Dropdown';
import { menu } from './menu';


const NavBar = () =>{
    const [categories, setCat] = useState([]);
    const [catId, setCatId] = useState(1);
    const [currentMenu, setMenu] = useState('');
    const [parentMenu, setParentMenu] = useState('');
    const [parentMenuId, setParentMenuId] = useState();
    const [parentMenuName, setParentMenuName] = useState('');
    const [lastMenu, setLastMenu] = useState('');
    const [nextMenu, setNextMenu] = useState('');
    const [lastCatId, setLastCatId] = useState(1);
    


    const getMainMenu = async () => {
        // console.log('lastCatId: ', lastCatId)
        // console.log('currentCatId: ', catId)
        // console.log('parentMenuName:', parentMenuName)
        // console.log('categories:', categories)
        try {
          const response = await fetch("http://localhost:3002/dropdown/menu1");
          const menuData = await response.json();
          setParentMenu('menu1')
          setMenu('menu1');
          setCat(menuData);
        } catch (err) {
          console.log(err.message);
        }
    };


    const getMenu2 = async (id, name) => {
        setLastMenu('menu1')
        setLastCatId(id)
        setParentMenuName(name)
        setParentMenuId(catId)
        setCatId(id)
        // console.log('parentId should be: ', id)
        // console.log('parentName should be: ', name)
        // console.log('lastCatId: ', lastCatId)
        // console.log('currentCatId: ', catId)
        // console.log('parentMenuName:', parentMenuName)
        // console.log('categories:', categories)
        try {
            const response = await fetch(`http://localhost:3002/dropdown/menu2/${id}`);
            const catData = await response.json();
            setMenu('menu2');
            setCat(catData);
            catData = catData
            } catch (err) {
            console.log(err.message);
            };
    }

    const getMenu3 = async (id, name) => {
        setLastMenu('menu2')
        setLastCatId(id)
        setParentMenuId(catId)
        setParentMenuName(name)
        setCatId(id)
        // console.log('parentId should be: ', id)
        // console.log('parentName should be: ', name)
        // console.log('lastCatId: ', lastCatId)
        // console.log('currentCatId: ', catId)
        // console.log('parentMenuName:', parentMenuName)
        // console.log('categories:', categories)
        try {
            const response = await fetch(`http://localhost:3002/dropdown/menu3/${id}`);
            const catData = await response.json();
            setMenu('menu3');
            setCat(catData);
            catData = catData
            } catch (err) {
            console.log(err.message);
            };
    }

    const goBack1 = (lastMenu, lastCatId, lastMenuName) =>{
        setCatId(lastCatId);
        setMenu(lastMenu);
        setParentMenuName(lastMenuName)
        console.log('lastMenu:' , lastMenu)
        console.log('goBack: lastMenuName: ', lastMenuName)
        getMainMenu();
    }

    const goBack2 = async (lastMenu, lastCatId, lastMenuName) =>{
        // setCatId(lastCatId);
        // setMenu(lastMenu);
        // setParentMenuName(lastMenuName)
        // console.log('lastCatId:' , lastCatId)
        // console.log('lastMenu:' , lastMenu)
        // console.log('goBack: lastMenuName: ', lastMenuName)
        // getMenu2(catId, parentMenuName)

        try {
            const response = await fetch(`http://localhost:3002/dropdown/menu2/${lastCatId}`);
            const catData = await response.json();
            setMenu('menu2');
            setCat(catData);
            catData = catData
            } catch (err) {
            console.log(err.message);
            };
    }


    return (
        <>
        <div className='navBarContainer'>
            <header className='topNavBar'>
                <a className='topHeaderLeft' href=''>Select a Store</a>
                <div className='topHeaderMiddle'>
                    <a href='#'>Weekly Ad</a>
                    <a href='#'>Find a Store</a>
                    <a href='#'>Customer Service</a>
                    <a href='#'>Gift Cards</a>
                </div>
                <a className='topHeaderRight' href=''>Sign in to see pricing</a>
            </header>
            <header className='bottomNavBar'>
                <div>
                    <img className='NavBarLogo' src='./nex:mexLogo' ></img>
                </div>
                <div className='catResults'>
                    <button onClick={()=> getMainMenu()}>menu</button>
                    <Dropdown
                    categories={categories}
                    getMenu2={getMenu2}
                    getMenu3={getMenu3}
                    goBackMenu1={goBack1}
                    goBackMenu2={goBack2}

                    parentMenuName={parentMenuName}
                    parentMenuId={parentMenuId}
                    parentMenu={parentMenu}
                    catId={catId}
                    currentMenu={currentMenu}
                    lastMenuId={lastCatId}
                    lastMenu={lastMenu}
                    setLastmenu={setLastMenu}
                    setLastMenuName={setParentMenuName}
                    />
                </div>
                <form className='searchBar'>
                    <input type='text' placeholder='Search' className='searchInput'></input>
                    <img className='nexcomMagnify' src='#'></img>
                </form>

            </header>
        </div>
        </>
    )
}


// const setStates = (cat-id, menu-num) => {
//     setCatId(cat-id);
//     setMenuNum(menu-num);
//     selectCategory(catId, menuNum);
// };

// const selectCategory = async (catid, menunum) =>{
//     // setCatId(catid);
//     // setMenuNum(menunum);
//     console.log('id: ' + catid);
//     console.log('menuNum:' + menuNum);
//     if (menunum === ''){
//         setMenuNum('menu1')
//     try {
//         const response = await fetch("http://localhost:3002/dropdown/menu1");
//         const menuData = await response.json();
//         //   console.log(menuData);
//         setCat(menuData)
//         // console.log(menuData)
//         // setCatId(catid);
//         // setMenuNum(menunum);
//         //   setCatId(categories.id)
//         } catch (err) {
//         console.log(err.message);
//         }
//     } else if(menuNum === 'menu1'){
//         try {
//             const response = await fetch(`http://localhost:3002/dropdown/menu2/${catId}`);
//             const catData = await response.json();
//             // console.log(catData);
//             setCat(catData)
//             setCatId(catid);
//             setMenuNum('menu2');
//             } catch (err) {
//             console.log(err.message);
//             };
//     } else if (menuNum === 'menu2'){
//         try {
//             const response = await fetch(`http://localhost:3002/dropdown/menu3/${catId}`);
//             const catData = await response.json();
//             // console.log(catData);
//             setCat(catData);
//             setCatId(catid);
//             setMenuNum('menu3');
//             } catch (err) {
//             console.log(err.message);
//             };
//     }
// };

// const lastMenu = () =>{
//     if(menuNum === 'menu3'){
//         setMenuNum('menu2')
//     } else if (menuNum === 'menu2'){
//         setMenuNum('menu1')
//     } else if (menuNum === 'menu1'){
//         setMenuNum('menu1')
//     };

//     selectCategory(catId ,menuNum);
// };

export default NavBar;