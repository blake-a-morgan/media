import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";


function UsersListItem({user}) {
    const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

    const handleClick = () => {
        doDeleteUser(user);
    }
    
    const header = <>
        <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrash />
        </Button>
        {error && <div>Error Deleting User. </div>}
        {user.name}
    </>
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
                
    )
}   

export default UsersListItem;