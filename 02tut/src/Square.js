

const Square = ({search, color}) => {
  return (
    <section className="square" style={
      {display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: color
    }}>

      <p>{search.length ? search : "Empty Value"}</p>
      
    </section>
  )
}

Square.defaultProps = {
  seacrh: "Empty Color Value"
}

export default Square
