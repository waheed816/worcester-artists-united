import React from "react";
import { thunkDeleteArtpiece } from "../../store/art_pieces";
import { useDispatch} from 'react-redux';
import { useModal } from "../../context/Modal";
import "./DeleteArtModal.css"

const DeleteArtModal = ({artworkDetails}) => {

    // console.log('ARTWORK DETAILS---->>>', artworkDetails)

    const dispatch = useDispatch();
    const { closeModal } = useModal();


    const deleteArtpiece = async(e) => {

        e.preventDefault();

        dispatch(thunkDeleteArtpiece(artworkDetails.id, artworkDetails.artist_id))

        closeModal()

    }


    return(
        <div className="delete-art-modal-container">
            <div>DELETE THIS ARTWORK?</div>
            <div className="delete-art-piece-image-container">
                <img className="delete-art-piece-image" src={artworkDetails.art_image_url}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://st3.depositphotos.com/26272052/33085/v/600/depositphotos_330852614-stock-illustration-color-delete-folder-icon-isolated.jpg"
                    }}
                    alt={`${artworkDetails.name}'s image unavailable`}>
                </img>
            </div>
            <div>
                <button onClick={deleteArtpiece}>YES (delete artwork)</button>
            </div>
            <div>
                <button onClick={closeModal}>NO (keep artwork)</button>
            </div>
        </div>

    )

}


export default DeleteArtModal;
