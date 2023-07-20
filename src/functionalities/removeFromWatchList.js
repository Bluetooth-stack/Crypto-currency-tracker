import { toast } from 'react-toastify'

export function removeFromWatchList(id) {
    if (window.confirm(`Confirm if you want to remove ${id.slice(0, 1).toUpperCase() + id.slice(1)} from your watchList!!`)) {
        const list = JSON.parse(localStorage.getItem('watchList'));
        let updated = list.filter((coinid) => (coinid !== id));
        localStorage.setItem('watchList', JSON.stringify(updated));
        toast.success(`${id.slice(0, 1).toUpperCase() + id.slice(1)} have been removed!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
    else {
        toast.error(`Couldn't remove ${id.slice(0, 1).toUpperCase() + id.slice(1)}!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
}