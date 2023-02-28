
import { useState } from 'react';

const ClickablePicture = ({ img: Max, imgClicked: Gafas }) => {

    const [image, setImage] = useState(Max);


    const changeImg = () => {
        image === Max ? setImage(Gafas) : setImage(Max)
    }

    return (
        <img onClick={changeImg} src={image} alt="imagen" />
    )
}

export default ClickablePicture