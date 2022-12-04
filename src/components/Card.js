// import Button from 'react-bootstrap/Button';
import './css/cardblog.css'

function BasicExample(scan) {
    return (
        <>
            <div class="cardblog 1">
                <div class="card_image"> <img src={scan.image} alt="imag" /> </div>
                <div class="card_title title-white">
                    <p>{scan.title}</p>
                </div>
            </div>
        </>
    );
}

export default BasicExample;