import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumListItem({album}) {
    const [deleteAlbum, results] = useDeleteAlbumMutation();

    const handleDeleteAlbum = () => {
      deleteAlbum(album);
    };

    const header = 
    <>
        <Button className="mr-2" loading={results.isLoading} onClick={handleDeleteAlbum}><GoTrash /></Button>
        {album.title}
        </>;

    return <ExpandablePanel header={header} key={album.id}>
        <PhotosList album={album}/>
    </ExpandablePanel>

}

export default AlbumListItem;