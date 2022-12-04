


const Start = ({onQuizStart}) => {
    
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                     <h1>Commencer le quiz</h1>
                    <p>Bonne chance!</p>
                    {/* permet de commencer le quiz grâce onClick pour passer l'étape 2: les question */}
                     <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
                </div>
            </div>
        </div>
)
    
    
}

export default Start