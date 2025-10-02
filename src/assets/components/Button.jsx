export default function Button(props) {
    return(
        <div className={`accordion-item ${props.state === props.item.id ? 'active' : ''}`} onClick={props.fClick} data-id={props.item.id} key={props.item.id}>
            <h2 onClick={props.fClick} data-id={props.item.id}>{props.item.title}</h2>
        </div>
    )
}