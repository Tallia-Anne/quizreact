import Card from './Card'
import scans from '../data/scan.json';
const Sitesanimes = () => {
    
    return (
        <div>Siteanime
            {
                scans.map((scan) =>

                    <Card name={scan.title} image={scan.image} />

                )
            }
        </div>
)
    
}

export default Sitesanimes