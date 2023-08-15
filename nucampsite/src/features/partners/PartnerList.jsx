import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';


const PartnerList = () => {

    const partners = selectAllPartners()

    return <>
        <Col>
            {partners.map((partner, index) => {
                return (
                    <div className='d-flex mb-5' key={index}>
                        <Partner partner={partner}/>
                    </div>
                )
            })}
        </Col>

    
    </>;
}

export default PartnerList;