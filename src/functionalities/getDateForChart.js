export const getDateForChart = (sec)=>{
    let date = new Date(sec);
    return date.getDate() + '/' + (date.getMonth()+1);
}