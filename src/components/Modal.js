const Modal = ({onClose, results, data}) => {
    
    return (
        <div className="modal is-active">
            {/* permet de fermet la modal */}
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Tes réponses:</p>
                    {/* permet de fermet la modal */}
                    <button className="delete" onClick={onClose}></button>
                </header>
                <section className="modal-card-body content">
                    <ul>
                        {/* afficher les résultats  */}
                        {results.map((result, i) => (
                            <li key={i} className="mb-6">
                                {/* les question */}
                                <p><strong>{result.q}</strong></p>
                                {/* la reponse qu'on selectionner qui est faux */}
                                <p className={result.a === data[i].answer ? 'has-background-success has-text-white p-2' : 'has-background-danger has-text-white p-2'}>La réponce selectionner: {result.a}</p>
                                {/* la reponse qu'on selectionner qui est vrai */}
                                {result.a !== data[i].answer && <p className="has-background-link has-text-white p-2">La bonne réponce est: {data[i].answer}</p>}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
)
}

export default Modal