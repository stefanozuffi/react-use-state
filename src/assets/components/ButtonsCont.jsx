import languages from "../data/languages";
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
            <div className="buttons-container">
            {languages.map(item => {
                return(
                    
                        <div className="accordion-item" onClick={handleClick} data-id={item.id} key={item.id}>
                            <h2 onClick={handleClick} data-id={item.id}>{item.title}</h2>
                        </div>
                        
                )
                })
            }
                
            </div>
            <div className="card">
                {current != 0  && <p>{languages.find(item => (current === item.id)).description}</p>}
            </div>
        </>
    )}
