import './SearchPage.css';
import { Header } from '../../components/Header/Header';
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Button, FormControl } from 'react-bootstrap';
import {} from 'react-bootstrap'


function SearchPage() {
  return (
    <div className="background">
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="Search for products...">
                    <FaSearch />
                </input>
                <Button className="searchButton">
                    <FaSearch />
                </Button>
            </div>
        </div>
    </div>
  );
}


export default SearchPage;