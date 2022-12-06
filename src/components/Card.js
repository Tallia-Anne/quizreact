// import Button from 'react-bootstrap/Button';
import './css/cardblog.css'

function BasicExample(scan) {
    return (
        <>
            <div class="cardblog 1">
                <div class="card_image"> <img src={scan.image} alt="imag" /> </div>
                <div class="card_title title-white">
                    <a href={scan.liens}> <p>{scan.title}</p></a> 
                </div>
            </div>
        </>
    );
}

export default BasicExample;