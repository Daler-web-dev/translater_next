import React, { useState } from 'react';
import translate from "translate";

interface TranslaterProps {
    lang?: string   
}


const Translater: React.FC<TranslaterProps> = ({lang = "ru"}) => {
    const [text, setText] = useState<string>('');

    // const text = await translate("Hello world", "es");
    // console.log("Hola mundo");

    const translateText:React.ChangeEventHandler = async (event:React.ChangeEvent<HTMLInputElement>): Promise<string> => {
        try {
            const translatedText = await translate(event.target.value, lang);
            
            setText(translatedText)           

        } catch(e) {
            console.log(e);
        }

        return ""
    }

    return (
        <div>
            <textarea onChange={translateText} >
                
            </textarea>
            <textarea readOnly defaultValue={text} ></textarea>
        </div>
    );
};

export default Translater;