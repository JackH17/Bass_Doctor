import React, { useState } from 'react'

import { getUserMediaStream } from '../utils/GetUserInput';

const TheDoctor = () => {

    const [audioCTX, setAudioCTX] = useState();

    const [analyser, setAnalyser] = useState();

    const [input, setInput] = useState();

    const [dryGain, setDryGain] = useState();
    const [wetGain, setWetGain] = useState();

    const [output, setOutput] = useState();



    const setUserInputs = (streamNode, dryGainNode, wetGainNode) => {

        setInput(streamNode);
        setDryGain(dryGainNode);
        setWetGain(wetGainNode);

    }


    const getContext = async () => {

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const context =  new AudioContext();
        const analyser = context.createAnalyser();


        setAudioCTX(context);
        setOutput(context.destination);
        setAnalyser(analyser);


        const userMediaStreamNode = await getUserMediaStream(context);



        setUserInputs(userMediaStreamNode, context.createGain(), context.createGain());
    };

    const engageDoctor = () => {

        input.connect(dryGain).connect(output);
        input.connect(wetGain).connect(output);
        input.connect(analyser)
    }



    return (
        <div>
            <h1>The Doctor</h1>
            <button onClick={getContext}>get input</button>
            <button onClick={engageDoctor}>engage</button>
 
        </div>
    )
};

export default TheDoctor;
