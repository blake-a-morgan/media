import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from '../components/Skeleton';
import ExpandablePanel from '../components/ExpandablePanel';
import Button from '../components/Button';

function AlbumsList({user}) {
    const {data, error, isLoading} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () =>{
        addAlbum(user);
    };

    let content;

    if (isLoading){
        content = <Skeleton  times={3}/>
    } else if (error){
        content = <div>Error Loading albums</div>
    } else{
        content = data.map(album => {
            const header = <div>{album.title}</div>;

            return <ExpandablePanel header={header} key={album.id}>
                List of photos in the album
            </ExpandablePanel>
        })
    }

    return <div>
        <div>
            Albums for {user.name}
            <Button onClick={handleAddAlbum}>+ Add Album</Button>
        </div>
        <div>{content}</div>
    </div>
}

export default AlbumsList;