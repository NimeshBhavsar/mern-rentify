import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("searchTerm", searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);

    };

    useEffect(() => {

        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get("searchTerm");
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);




    return (
        <header className="bg-gray-800 shadow-md">
            <div className="flex justify-between items-center max-w-8xl mx-auto p-3">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-4xl flex flex-wrap">
                        <span className="text-slate-200">RENT</span>
                        <span className="text-slate-500">ify</span>
                    </h1>
                </Link>
                <form onSubmit={handleSubmit} className="bg-slate-300 p-3 rounded-lg flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none w-24 sm:w-96"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}

                    />
                    <button>
                        <FaSearch className="text-slate-600" />

                    </button>
                </form>
                <ul className="flex gap-6">
                    <Link to="/">
                        <li className="hidden sm:text-2xl sm:inline text-slate-100 hover:underline">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:text-2xl sm:inline text-slate-100 hover:underline">
                            About
                        </li>
                    </Link>

                    <Link to="/profile">
                        {currentUser ? (
                            <img
                                src={currentUser.avatar}
                                alt="avatar"
                                className="rounded-full h-10 w-10 object-cover"
                            />
                        ) : (
                            <li className="text-slate-700 hover:underline">Sign In</li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
