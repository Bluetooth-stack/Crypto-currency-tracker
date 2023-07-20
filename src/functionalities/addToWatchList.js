import { toast } from 'react-toastify'

export function addToWatchList(id){
    if(localStorage.getItem('watchList')){
        const dataId = JSON.parse(localStorage.getItem('watchList'));
        let updated = [...dataId, id];
        localStorage.setItem('watchList', JSON.stringify(updated));
        toast.success(`${id.slice(0, 1).toUpperCase() + id.slice(1)} has been added to your list!`, {
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
    else{
        let idlist = JSON.stringify([id]);
        localStorage.setItem('watchList',idlist);
        toast.success(`${id.slice(0, 1).toUpperCase() + id.slice(1)} has been added to your list!`, {
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