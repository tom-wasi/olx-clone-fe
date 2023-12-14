import { Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import axiosConfig from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import './style.css';
import SearchResults from './SearchResults';


export const SearchField = () => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (keyword.trim() !== "") {
            try {
                setLoading(true);
                const response = await axiosConfig.get(`/products/search/by-keyword?keyword=${keyword}`);
                if (response.ok) {
                    const products = await response.json(); // Parse the response here
                    setSearchResults(products);
                    navigate("/search-results");
                } else if (response.status === 404) {
                    navigate("/not-found");
                } else {
                    console.error(`Error: ${response.status}`);
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <Form className="d-flex search-field-body">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="search-field-box"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    aria-label="Search"
                />
                <Button variant="outline-info" className="me-2" onClick={handleSearch}>
                    Search
                </Button>
            </Form>
            {/* Pass the parsed products to SearchResults */}
            <SearchResults products={searchResults} />
        </div>
    );
};