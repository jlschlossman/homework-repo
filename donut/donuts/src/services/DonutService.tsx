import axios from "axios";

export function getDonuts(): any {
    return axios.get('https://grandcircusco.github.io/demo-apis/donuts.json')
    .then(response => response.data)
}