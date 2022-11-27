import { useEffect, useState } from "react";


export default function API() {

    const [showAdvice, setShowAdvice] = useState('');
    const [changeAdvice, setChangeAdvice] = useState (1)

    useEffect(() => {
    async function FetchAPI() {
    const response = await fetch(`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setShowAdvice(data.activity)
    }
    FetchAPI(); 
    }, [changeAdvice]);

    const finalChange = (e) => {
        e.preventDefault()
        setChangeAdvice(showAdvice);
    }

    return(
        <div>
            <div className="showAdvice">
                    <form onSubmit={finalChange}>
                    <h3>Maybe you should ... </h3>
                    <h3>{showAdvice} ?</h3>
                    <button className="btn">CHANGE ADVICE</button>
                    </form>
                </div>
            </div>
    )
}