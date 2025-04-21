import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const {itemId} = useParams();

    return (
        <div>
            <h2>Detalle de {itemId}</h2>
        </div>
    )
}

export default ItemDetailContainer;