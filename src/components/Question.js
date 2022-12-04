import React, { useState, useEffect, useRef } from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
    // selectionner la réponse
    const [selected, setSelected] = useState('');
    // afficher l'erreur
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);
    //cette fonctionne va permet d'afficher l'erreur quand clique sur le button suivant sans  avoir selectionner la réponse
    const changeHandler = (e) => {
        setSelected(e.target.value);
        if (error) {
            setError('');
        }
    }

    const nextClickHandler = (e) => {
       
        if (selected === '') {
        // si on clique sur le button suivant cela va afficher un message qui dire selectionner la réponse    
            return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions -    1) {
            // permet d'enchainer les question
            onSetActiveQuestion(activeQuestion + 1);
            // a la fin des question. on va passer à l'étape 3
        } else {
            onSetStep(3);
        }
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    {/* le titre de question */}
                    <h2 className="mb-5">{data.question}</h2>
                    <div className="imagebox">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="control" ref={radiosWrapper}>
                        {/* les choices pour repondre a la question */}
                        {data.choices.map((choice, i) => (
                            <label className="radio has-background-light" key={i}>
                                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                                {choice}
                            </label>
                        ))}
                    </div>
                    {error && <div className="has-text-danger">{error}</div>}
                    <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Question;