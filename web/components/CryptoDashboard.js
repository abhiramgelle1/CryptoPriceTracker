import { useCryptoPrices } from '../hooks/useCryptoPrices';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function CryptoDashboard() {
    const { data, error, isLoading, refetch } = useCryptoPrices();
    const [search, setSearch] = useState('');

    const filteredData = data?.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase())) || [];

    return (
        <div className="container min-vh-100 bg-dark text-white d-flex flex-column align-items-center py-5">
            <div className="w-100 max-w-2xl bg-secondary p-4 rounded shadow-lg">
                <h1 className="text-center fw-bold mb-4">Crypto Price Tracker</h1>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search Cryptocurrency..." 
                        onChange={(e) => setSearch(e.target.value)}
                        disabled={isLoading || error}
                    />
                    <button className="btn btn-primary" onClick={refetch} disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Refreshing...
                            </>
                        ) : (
                            'Refresh'
                        )}
                    </button>
                </div>
                {isLoading && (
                    <div className="text-center py-3">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2">Fetching latest prices...</p>
                    </div>
                )}
                {error && (
                    <div className="alert alert-danger text-center d-flex align-items-center" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        <span>Failed to load data. Please try again.</span>
                    </div>
                )}
                {!isLoading && !error && (
                    <ul className="list-group">
                        {filteredData.length > 0 ? (
                            filteredData.map((coin) => (
                                <li key={coin.id} className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                                    <span className="fs-5">{coin.name}</span>
                                    <span className="fs-5 fw-bold">${coin.current_price.toFixed(2)}</span>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item text-center bg-dark text-white">
                                No matching results found.
                            </li>
                        )}
                    </ul>
                )}
            </div>
            
            <div className="text-center mt-4 p-3 bg-secondary rounded shadow-lg">
                <h5 className="fw-bold">Contact Information</h5>
                <p className="mb-1"><FaUser className="me-2" /> Abhiram Gelle</p>
                <p className="mb-1"><FaEnvelope className="me-2" /> abhiramgelle738@gmail.com</p>
                <p><FaPhone className="me-2" /> +1 678-480-4408</p>
            </div>
        </div>
    );
}
