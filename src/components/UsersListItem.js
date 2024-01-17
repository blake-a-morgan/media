import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/useThunk";


function UsersListItem({user}) {
    const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

    const handleClick = () => {
        doDeleteUser(user);
    }

    return <div  className='mb-2 border rounded'>
                <div className='flex p-2 justify-between items-center cursor-pointer'>
                    {error && <div>Error Deleting User. </div>}
                    <div className="flex flex-row items-center justify-between">
                    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
                        <GoTrash />
                    </Button>
                    {user.name}
                    </div>
                </div>
            </div>
}   

export default UsersListItem;