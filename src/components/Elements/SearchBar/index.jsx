const SearchBar = () => {
    return (
        <div className="join">
            <div>
                <div>
                    <input className="input input-bordered join-item" placeholder="Search"/>
                </div>
            </div>
            <select className="select select-bordered join-item">
                <option disabled selected>Pilih Daerah</option>
                <option>Jakarta Utara</option>
                <option>Jakarta Pusat</option>
                <option>Jakarta Selatan</option>
                <option>Jakarta Timur</option>
                <option>Jakarta Barat</option>
            </select>
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">new</span> 
                <button className="btn join-item bg-[#FF7200] text-white">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;