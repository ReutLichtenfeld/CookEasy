import axios from 'axios';

export const getRecipes = async ({ limit, keyWords, page=1, fields='name,description,picture,ranking,author,_id' }) => {
    let urlStr = 'http://127.0.0.1:5000/api/v1/recipes';

    urlStr += `?page=${page}`;
    urlStr += `&limit=${limit}`;
    urlStr += `&fields=${fields}`;
    if (keyWords) {
        urlStr += `&keyWords=${keyWords}`;
    }
    
    const results = await axios({
        method: 'GET',
        url: urlStr
    });

    return results;
};

