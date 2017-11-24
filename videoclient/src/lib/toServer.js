import axios from 'axios';

const kUrl = "http://localhost/";

export function saveResponseToVideoClick(video_id, pointed_time){

    let response = Object.assign({}, {
        video_id,
        pointed_time,
    });
    return axios.post(`${kUrl}api/response/`, response);
}

export function getHighlightsByVideoId(video_id){
    return axios.get(`${kUrl}api/response/highlight/set/${video_id}/`);
}
