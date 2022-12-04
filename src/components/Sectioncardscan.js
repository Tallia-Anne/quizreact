import Card from './Card'
import scan from '../data/scan'
import './css/sectioncardscan.css'
const Sectioncardscan = (scans) => {
    
    
    return (
        <div className="sectionbg">
            <div className="flexsec">
                <h2>SITES GRATUITS POUR LIRE VOS MANGAS  </h2>
               <div className='ligne'></div>
            </div>
        <div className="sectioncardscan">
           
            {
                scan.map((scan) =>

                    <Card title={scan.title} image={scan.image} liens={scan.liens} />

                )
            }
        </div>
</div>
)

    
}

export default Sectioncardscan