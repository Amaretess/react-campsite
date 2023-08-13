import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import "../../App.css";

const CampsiteCard = ({ campsite }) => {

    return <>
        <Card className="card-body" >
            <CardImg  width="100%" src={campsite.image} alt={campsite.name}/>
            <CardImgOverlay className="card-img-overlay">
                <CardTitle >{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    
    </>;
}

export default CampsiteCard;