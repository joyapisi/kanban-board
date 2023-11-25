//This component will hold all components and the icon which adds a column
function Column({column}){
    return(
        <div className="column">
        <h3>{column.title}</h3>
   
      </div> 
   )
}

export default Column();