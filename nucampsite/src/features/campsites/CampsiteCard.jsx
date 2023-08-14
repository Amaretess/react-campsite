import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import "../../App.css";
import { Link } from "react-router-dom";

const CampsiteCard = ({ campsite }) => {

    return <Link to={`${campsite.id}`}>
        <Card className="card-body" >
            <CardImg  width="100%" src={campsite.image} alt={campsite.name}/>
            <CardImgOverlay className="card-img-overlay">
                <CardTitle >{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    
    </Link>;
}

export default CampsiteCard;