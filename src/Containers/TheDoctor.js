import React, { useState } from 'react'
///////////////////////////////////////////
import { getUserMediaStream } from '../utils/GetUserInput';
import { distortionCurve } from '../utils/DistortionCurve';
///////////////////////////////////////////
import Comp from '../Components/Comp';

const TheDoctor = () => {

    const [audioCTX, setAudioCTX] = useState();

    const [input, setInput] = useState();

    const [fxChain, setFXChain] = useState({});

    const [dryGain, setDryGain] = useState();
    const [wetGain, setWetGain] = useState();

    const [output, setOutput] = useState();

    const setComp = (comp) => {

        fxChain.comp.attack.value = comp.attack;
        fxChain.comp.release.value = comp.release;
        fxChain.comp.knee.value = comp.knee;
        fxChain.comp.ratio.value = comp.ratio;
        fxChain.comp.threshold.value = comp.threshold;

        console.log(fxChain)
    
    }


    const setUserInputs = (streamNode, dryGainNode, wetGainNode) => {

        setInput(streamNode);
        setDryGain(dryGainNode);
        setWetGain(wetGainNode);

    }

    const setEffectsNodes = async (comp, filter, dist) => {

        filter.type = 'bandpass';
        filter.frequency.value = 500;
        filter.Q.value = 5;
        filter.gain.value = 1;

        console.log(filter);

       comp.threshold.value = -20;

       comp.attack.value = 0.001;
       comp.release.value = 0.025;

       console.log(dist)



       const curve = await distortionCurve(50);

       dist.curve = curve;


        setFXChain({
            comp,
            filter, 
            dist
        });

    }


    const getContext = async () => {

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const context =  new AudioContext();

        setAudioCTX(context);
        setOutput(context.destination);
        
        const userMediaStreamNode = await getUserMediaStream(context);

        setUserInputs(userMediaStreamNode, context.createGain(), context.createGain());


        setEffectsNodes(context.createDynamicsCompressor(), context.createBiquadFilter(), context.createWaveShaper());
    };

    const engageDoctor = () => {

        console.log(fxChain)

        console.log(wetGain)

        input.connect(dryGain).connect(output);
        input.connect(wetGain).connect(fxChain.comp).connect(fxChain.filter).connect(fxChain.dist).connect(output);
    }



    return (
        <div>
            <h1>The Doctor</h1>
            <button onClick={getContext}>get input</button>
            <button onClick={engageDoctor}>engage</button>
            <Comp setComp={setComp}/>
 
        </div>
    )
};

export default TheDoctor;
