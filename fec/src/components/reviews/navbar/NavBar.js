import React, { useEffect, useState } from "react";
import DropDown from './Dropdown';
import { Dropdown } from 'reactstrap'


const NavBar = () =>{
    const [categories, setCat] = useState([]);
    const [catId, setCatId] = useState(1);
    const [currentMenu, setMenu] = useState('');
    const [parentMenu, setParentMenu] = useState('');
    const [parentMenuId, setParentMenuId] = useState();
    const [parentMenuName, setParentMenuName] = useState('');
    const [lastMenu, setLastMenu] = useState('');
    const [lastCatId, setLastCatId] = useState(1);
    const [open, setOpen] = useState(false)

    const getMainMenu = async () => {
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
        try {
            const response = await fetch(`http://localhost:3002/dropdown/menu2/${id}`);
            const catData = await response.json();
            setMenu('menu2');
            setCat(catData);
            } catch (err) {
            console.log(err.message);
            };
    }

    const getMenu3 = async (id, name) => {
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
        // setParentMenuName(lastMenuName)
        console.log('lastMenu:' , lastMenu)
        console.log('goBack: lastMenuName: ', lastMenuName)
        getMainMenu();
    }

    const goBack2 = async (lastMenu, lastCatId, lastMenuName) =>{
        setCatId(lastCatId);
        setMenu(lastMenu);
        setParentMenuName(lastMenuName)
        console.log('lastCatId:' , lastCatId)
        console.log('lastMenu:' , lastMenu)
        console.log('goBack: lastMenuName: ', lastMenuName)
        getMenu2(catId, currentMenu)
    }

    const myFunction = () =>{
        // x.classList.toggle("change");

        setOpen(!open)
    }

    useEffect(()=>{
        getMainMenu();
    }, [])

    return (
        <>
        <div className='navBarContainer'>
            <header className='topNavBar'>
                <a className='topHeaderLeft' href=''>Select a Store</a>
                <div className='topHeaderMiddle'>
                    <a className='topHeaderMid' href='#'>Weekly Ad</a>
                    <a className='topHeaderMid' href='#'>Find a Store</a>
                    <a className='topHeaderMid' href='#'>Customer Service</a>
                    <a className='topHeaderMid' href='#'>Gift Cards</a>
                </div>
                <a className='topHeaderRight' href=''>Sign in to see pricing</a>
            </header>
            <header className='bottomNavBar'>
                <div className='logoContainer'>
                    <img className='NavBarLogo' src='./nex:mexLogo' ></img>
                </div>
                <div className='menuSection'>
                    <div className='menuButton' onClick={()=> myFunction()}>
                        <div className='bar1'></div>
                        <div className='bar2'></div>
                        <div className='bar3'></div>
                    </div>
                    <h3>Categories</h3>
                </div>
                <form className='searchBar'>
                    <input type='text' placeholder='Search' className='searchInput'></input>
                    <img className='nexcomMagnify' src='#'></img>
                </form>
                <div className='menuContainer'>
                    <div className='catResults'>
                    <DropDown
                    categories={categories}
                        getMenu2={getMenu2}
                        getMenu3={getMenu3}
                        goBackMenu1={goBack1}
                        goBackMenu2={goBack2}
                        open={open}
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
                </div>
            </header>
        </div>
        </>
    )
}


export default NavBar;