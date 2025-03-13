

const SearchColor = ({handleSearch}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input placeholder="Add color name" onChange={handleSearch} className="searchForm" type="text" />
    </form>
  )
}

export default SearchColor
