import Utils from '../../services/Utils.js';
import { apiUrl } from '../../services/Constants.js';

import Error404 from './Error404.js'

const idUnknown = "Not found";

let getId = () => {
    return location.hash.slice(1).split('/').pop();
}

let Item = {
    render: async () => {
        let url = apiUrl + '/' + parseInt(getId());
        let item = await Utils.getApiJson(url);

        if(item === idUnknown) {
            return Error404.render();
        }

        let view = /*html*/`
            <section class="section">
                <h1>Item ${item.title}</h1>
                <p>${item.caption}</p>
            </section>
        `
        return view;
    },
    afterRender: async () => {}
}

export default Item;