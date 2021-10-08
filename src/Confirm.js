import { useConfirm } from './useConfirm';

const Confirm = () => {
    const deleteWorld = () => console.log("Deleting the world!");
    const abort = () => console.log('Abort');
    const confirmDelete = useConfirm("Are you sure ?", deleteWorld, abort);

    return (
        <button onClick={confirmDelete}>
            Delete the world
        </button>
    );
}

export default Confirm;