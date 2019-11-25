import React, { useState, useEffect } from 'react';
//////////////////////////////////////////////////

const Comp = ({setComp}) => {

    let compDefaults = {
        threshold: -20,
        attack: 0.01,
        release: 0.1,
        ratio: 4,
        knee: 20
    }

    let comp = {};

    const [compThreshold, setCompThreshold] = useState(compDefaults.threshold);
    const [threshold, setThreshold] = useState(compDefaults.threshold);

    const [compRatio, setCompRatio] = useState(compDefaults.ratio);
    const [ratio, setRatio] = useState(compDefaults.ratio);

    const [compRelease, setCompRelease] = useState(compDefaults.release);
    const [release, setRelease] = useState(compDefaults.release);

    const [compAttack, setCompAttack] = useState(compDefaults.attack);
    const [attack, setAttack] = useState(compDefaults.attack);

    const [compKnee, setCompKnee] =useState(compDefaults.knee);
    const [knee, setKnee] =useState(compDefaults.knee);

    useEffect(() => {

        pushComp()

    }, [threshold, ratio, release, attack, knee])


    const handleCompThresholdChange = (e) => {
        setCompThreshold(parseFloat(e.target.value));
    }

    const mouseUpThreshold = (e) => {
        setThreshold(parseFloat(e.target.value));
    }

    const handleCompRatioChange = (e) => {
        setCompRatio(parseFloat(e.target.value));
    }

    const mouseUpRatio = (e) => {
        setRatio(parseFloat(e.target.value));
    }

    const handleCompReleaseChange = (e) => {
        setCompRelease(parseFloat(e.target.value));
    }

    const mouseUpRelease = (e) => {
        setRelease(parseFloat(e.target.value));
    }

    const handleCompAttackChange = (e) => {
        setCompAttack(parseFloat(e.target.value));
    }

    const mouseUpAttack = (e) => {
        setAttack(parseFloat(e.target.value));
    }

    const handleCompKneeChange = (e) => {
        setCompKnee(parseFloat(e.target.value))
    }

    const mouseUpKnee = (e) => {
        setKnee(parseFloat(e.target.value));
    }

    const pushComp = () => {

        comp = {

            threshold, 
            ratio, 
            attack, 
            release, 
            knee
        }

        setComp(comp);
    }

    return (
        <div>
            <h1>Comp</h1>

                <p>Threshold- {compThreshold}</p>
                <input type="range" name="Threshold" min="0" max="1" step="0.1" value={compThreshold} onChange={handleCompThresholdChange} onMouseUp={mouseUpThreshold}></input>
                <p>Ratio - {compRatio}</p>
                <input type="range" name="ratio" min="0" max="20" step="1" value={compRatio} onChange={handleCompRatioChange} onMouseUp={mouseUpRatio}></input>
                <p>Attack - {compAttack}</p>
                <input type="range" name="attack" min="0" max="1" step="0.01" value={compAttack} onChange={handleCompAttackChange} onMouseUp={mouseUpAttack}></input>
                <p>Release - {compRelease}</p>
                <input type="range" name="release" min="0" max="1" step="0.01" value={compRelease} onChange={handleCompReleaseChange} onMouseUp={mouseUpRelease}></input> 
                <p>Knee - {compKnee}</p>
                <input type="range" name="knee" min="0" max="30" step="0.01" value={compKnee} onChange={handleCompKneeChange} onmMouseUp={mouseUpKnee}></input>

            <button onClick={pushComp}>Set Comp</button>
        </div>
    )
}

export default Comp;
