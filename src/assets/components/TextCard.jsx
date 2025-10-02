import languages from "../data/languages"

export default function TextCard(props) {
    return(
        <div className="text-card container">
                {props.state != 0  && <p>{languages.find(item => (props.state === item.id)).description}</p>}
                {props.state == 0 && <p>No language selected..</p>}
            </div>
    )
}
