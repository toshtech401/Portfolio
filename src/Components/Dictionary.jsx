import React, { useState } from "react";
import './Dictionary.css'


const Dictionary = ()=>{
    const [meaning, setMeaning] = useState("")
    const [dic, setDic] = useState(null)
    const FetchDic = async()=>{
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${meaning}`
        await fetch(url)
        .then(res=>res.json())
        .then(output=> setDic(output))
    }
    const handleClick = (event)=>{
        event.preventDefault();
        FetchDic();
    }
    

    return(
            <div className="me">
            <div className="container">
                <div className="search-box">
                    <form action="" onSubmit={handleClick}>
                    <input type="text" value={meaning} onChange={(e)=>setMeaning(e.target.value)} placeholder="Type the word here..."  />
                    <button type="submit">Search</button>
                    </form>
                </div>
                {
                    dic &&(
                        <div className="result">
                    <div className="word">
                        <h3>{dic[0].word}</h3> 
                        <button>
                            <i className="fa fa-volume-up" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="details">
                        <p>{dic[0].meanings[0].partOfSpeech}</p>
                        <p>{dic[0].phonetic}</p>
                    </div>
                    <p className="word-meaning">
                        {dic[0].meanings[0].definitions[0].definition}
                    </p>
                    <p className="word-example">
                        {dic[0].meanings[0].definitions[0].example}
                    </p>
                </div>
                    )
                }
            </div>
        </div> 
    )
}


export default Dictionary