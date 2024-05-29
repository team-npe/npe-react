import "./search.css";

function Search({ setSearch }) {
  const searchOpenHandler = () => {
    setSearch((isOpen) => (isOpen = false));
  };
  return (
    <>
      <div
        role="button"
        aria-hidden="true"
        className="button-div"
        onClick={searchOpenHandler}
      ></div>
      <div className="search-bar-box">
        <div className="search-bar-inner">
          <svg
            width="24"
            height="24"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="search-bar-svg"
          >
            <g>
              <g id="style=outline">
                <path
                  id="search"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.4551 9.84879C15.4551 12.9451 12.9451 15.4551 9.84879 15.4551C6.75253 15.4551 4.24251 12.9451 4.24251 9.84879C4.24251 6.75253 6.75253 4.24251 9.84879 4.24251C12.9451 4.24251 15.4551 6.75253 15.4551 9.84879ZM16.0841 14.6165C17.0962 13.2948 17.6976 11.642 17.6976 9.84879C17.6976 5.51402 14.1836 2 9.84879 2C5.51402 2 2 5.51402 2 9.84879C2 14.1836 5.51402 17.6976 9.84879 17.6976C11.6421 17.6976 13.295 17.0961 14.6167 16.0839C14.6435 16.119 14.6729 16.1527 14.705 16.1848L20.2269 21.7067C20.6175 22.0972 21.2506 22.0972 21.6412 21.7067L21.7069 21.641C22.0975 21.2504 22.0975 20.6173 21.7069 20.2267L16.185 14.7048C16.1529 14.6727 16.1192 14.6433 16.0841 14.6165Z"
                ></path>
              </g>
            </g>
          </svg>
          <input
            className="search-input"
            placeholder="회사, 사람, 키워드로 검색"
            enterKeyHint="search"
            value=""
          />
        </div>
      </div>
    </>
  );
}
export default Search;
