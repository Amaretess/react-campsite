import { useParams } from "react-router";
import { Container, Row, Col } from "reactstrap";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";



const CampsiteDetailPage = () => { 
    
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId)
    return <>

        <Container>
            <Row>
                <CampsiteDetail campsite={campsite}/>
            </Row>
        </Container>
    
    </>;
}

export default CampsiteDetailPage;