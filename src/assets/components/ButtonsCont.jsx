import languages from "../data/languages";
import Button from "./Button";
import TextCard from "./TextCard";
import { useState } from "react";

export default function ButtonsCont() {
    const [current, setCurrent] = useState(0)

    function handleClick(e) {
        const id = parseInt(e.target.getAttribute('data-id'))

        if (id !== current) {
            setCurrent(id)
        }
        else {
            setCurrent(0)
        }
    }

    return(
        <>
            <div className="buttons-container container">
            {languages.map(item => {
                return(
                    <Button state={current} item={item} fClick={handleClick} key={item.id}/>
                )
                })
            }
            </div>
            <TextCard state={current}/>
        </>
    )}
