// Write all the code here
// Write all the code here

import React from "react";
import {IoFastFoodOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {FiShoppingBag, FiLogIn} from "react-icons/fi";
import {motion} from "framer-motion";
import DropdownMenu from "./DropdownMenu";

const Header = ({isAuthenitcated = false}) => {
    return (
        <nav>
            <motion.div initial={{x:"-100%"}} whileInView={{x:0}}>
            {/* <div> */}
                <IoFastFoodOutline />
            {/* </div> */}
            </motion.div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">
                    <FiShoppingBag />
                </Link>
                <DropdownMenu />
            </div>
        </nav>
    );
};

export default Header;