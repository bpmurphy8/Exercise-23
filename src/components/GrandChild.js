const GrandChild = (props) => {
    return ( 
        <div>
            <h1> Grand Child</h1>
            <h3> Values from Grand Parent - {props.grandname}</h3>
            <h3> Values from Child - {props.parentname}</h3>
            <h3> Values from Grand Child - {props.name}</h3>
        </div>
     );
}
 
export default GrandChild;