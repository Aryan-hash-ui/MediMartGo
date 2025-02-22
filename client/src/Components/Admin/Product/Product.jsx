import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from "../../../Store/ActionCreators/ProductActionCreators"
import DataTable from 'react-data-table-component';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

// Search Component
const SearchComponent = ({ handleSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const onSearchClick = () => {
        handleSearch(inputValue);
    };

    return (
        <div className="d-flex">
            <input
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="form-control"
                style={{ width: '200px' }} // Adjust width as needed
            />
            <button
                onClick={onSearchClick}
                className="btn btn-primary ms-2"
                style={{ height: '100%' }}  // Ensure button height matches input
            >
                <FaSearch />
            </button>
        </div>
    );
};

export default function Product() {
    const columns = [
        {
            name: 'Id',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Main Category',
            selector: row => row.maincategory,
            sortable: true,
        },
        {
            name: 'Sub Category',
            selector: row => row.subcategory,
            sortable: true,
        },
        {
            name: 'Brand',
            selector: row => row.brand,
            sortable: true,
        },
        {
            name: 'Color',
            selector: row => row.color,
            sortable: true,
        },
        {
            name: 'Size',
            selector: row => row.size,
            sortable: true,
        },
        {
            name: 'BasePrice',
            selector: row => <p><strike>&#8377;{row.baseprice}</strike></p>,
            sortable: true,
        },
        {
            name: 'Discount',
            selector: row => <p>{row.discount}% Off</p>,
            sortable: true,
        },
        {
            name: 'FinalPrice',
            selector: row => <p>&#8377;{row.finalprice}</p>,
            sortable: true,
        },
        {
            name: 'Stock',
            selector: row => row.stock,
            sortable: true,
        },
        {
            name: 'Pic1',
            selector: row => <a href={`${process.env.REACT_APP_SERVER}/${row.pic1}`}><img src={`${process.env.REACT_APP_SERVER}/${row.pic1}`} alt="Pic1" width="50px" height="50px" /></a>,
            sortable: false,
        },
        {
            name: 'Pic2',
            selector: row => <a href={`${process.env.REACT_APP_SERVER}/${row.pic2}`}><img src={`${process.env.REACT_APP_SERVER}/${row.pic2}`} alt="Pic2" width="50px" height="50px" /></a>,
            sortable: false,
        },
        {
            name: 'Pic3',
            selector: row => <a href={`${process.env.REACT_APP_SERVER}/${row.pic3}`}><img src={`${process.env.REACT_APP_SERVER}/${row.pic3}`} alt="Pic3" width="50px" height="50px" /></a>,
            sortable: false,
        },
        {
            name: 'Pic4',
            selector: row => <a href={`${process.env.REACT_APP_SERVER}/${row.pic4}`}><img src={`${process.env.REACT_APP_SERVER}/${row.pic4}`} alt="Pic4" width="50px" height="50px" /></a>,
            sortable: false,
        },
        {
            name: 'Edit',
            selector: row => <Link to={`/admin/product/update/${row._id}`}><i className='fa fa-edit text-success'></i></Link>,
            sortable: false,
        },
        {
            name: 'Delete',
            selector: row => <button className='btn' onClick={() => deleteItem(row._id)}><i className='fa fa-trash text-danger'></i></button>,
            sortable: false,
        }
    ];

    let dispatch = useDispatch();
    let [data, setData] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');
    let ProductStateData = useSelector((state) => state.ProductStateData);

    function deleteItem(_id) {
        if (window.confirm("Are You Sure!!! You Want to Delete the Item! Please Confirm: ")) {
            dispatch(deleteProduct({ _id }));
            getAPIData();
        }
    }

    function getAPIData() {
        dispatch(getProduct());
    }

    useEffect(() => {
        if (ProductStateData.length) {
            setData(ProductStateData);
        }
    }, [ProductStateData]);

    // Handle search functionality
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm) {
            const filteredData = ProductStateData.filter(item =>
                Object.values(item).some(val =>
                    val.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
            setData(filteredData);
        } else {
            setData(ProductStateData);
        }
    };

    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>
                            Product
                            <Link to="/admin/product/create">
                                <i className='fa fa-plus text-light float-end'></i>
                            </Link>
                        </h5>
                        <div className="table-responsive">
                            <DataTable
                                className='table'
                                columns={columns}
                                data={data}
                                pagination
                                paginationPerPage={5}
                                subHeader
                                subHeaderComponent={
                                    <SearchComponent handleSearch={handleSearch} />
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
