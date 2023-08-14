import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import "../../App.css";
import { Link } from "react-router-dom";

const CampsiteCard = ({ campsite }) => {

    const { id, image, name } = campsite;

    return <Link to={`${id}`}>
        <Card className="card-body" >
            <CardImg  width="100%" src={image} alt={name}/>
            <CardImgOverlay className="card-img-overlay">
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    
    </Link>;
}

export default CampsiteCard;