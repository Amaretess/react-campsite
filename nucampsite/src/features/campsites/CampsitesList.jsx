import { Row, Col } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = ({ setCampsiteId }) => {

    const campsites = selectAllCampsites();
    
    return <>   
            <Row className="ms-auto">
                {campsites.map((campsite) => {
                    return (
                        <Col onClick={() => setCampsiteId(campsite.id)} key={campsite.id} className="m-4"  md="8">
                            <CampsiteCard campsite={campsite}/>
                        </Col>
                    )
                })}
            </Row>
        </>
}


export default CampsitesList;

