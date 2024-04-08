import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.webp'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div className='main-part'>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" ><img className='logo-img' src={logo} alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Shop</a>
                                <a class="nav-link" href="#">Featured</a>
                                <a class="nav-link" href="#" >Pages</a>
                                <a class="nav-link" href="#">Blogs</a>
                            </div>
                        </div>
                        <div className='nav-icons'>
                            <CiSearch />
                            <CiUser />
                            <CiHeart />
                            <AiOutlineShopping />

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar