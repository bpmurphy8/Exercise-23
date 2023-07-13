import GrandChild from "./GrandChild";

const Child = (props) => {
    return ( 
        <div>
            <h2> Child component</h2>
            <h4> Values from Parent name - {props.parentName},
            parent location - {props.parentLoc}</h4>
            <hr/>
            Values from Child - {props.name}
            <GrandChild grandname={props.parentName} grandloc={props.location} 
            parentname={props.name} name="Sameer" />
        </div>
     );
}
 
export default Child;