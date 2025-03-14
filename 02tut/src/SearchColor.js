import colorNames from "colornames";

const SearchColor = ({handleSearch}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Add Color Name</label>
      <input 
        placeholder="Add color name" onChange={handleSearch} className="searchForm" type="text" />
    </form>
  )
}

export default SearchColor
