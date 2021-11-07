import React from 'react'
import { element, func, string } from "prop-types";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Dropdown(props) {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const wrapperRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener('mousedown', handleDropDown)
        return () => document.removeEventListener('mousedown', handleDropDown)
    })

    const handleDropDown = (event) => {
        if (wrapperRef && wrapperRef.current.contains(event.target)) setShowDropdown(!showDropdown)
        else setShowDropdown(false)
    }

    return (
        <div ref={wrapperRef} className="relative cursor-pointer bg-transparent">
            <button className="py-2">{props.title} <FontAwesomeIcon icon={faCaretDown}/></button>
            {showDropdown && <div className="absolute bg-white w-full flex flex-col items-start shadow-lg ">
                {props.children}
                </div>}
        </div>
    )
}

const Item = (props) => <button className="text-gray-700 font-semibold z-50 text-left px-2 my-1 w-full hover:bg-blue-400" onClick={props.onClick}>{props.name}</button>
Item.propTypes = {
    onClick: func,
    name: string
}

Dropdown.Item = Item

Dropdown.propTypes ={
    title: string,
    children: element,
}

export default Dropdown
