const URL = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/';

const getMain = async() => {
    const data = await fetch(URL).then((response) => {
        if (response.ok === true && response.status === 200) {
            return {
                status: true,
                data : (response.json()),
            }
        } else {
            return {
                status: false,
                message : response.status + 'error',
            };
        }
    });

    return data;
}

const getDetail = async(id) => {
    
    const data = await fetch(URL + id).then((response) => {
        if (response.ok === true && response.status === 200) {
            return {
                status: true,
                data : (response.json()),
            }
        } else {
            return {
                status: false,
                message : response.status + 'error',
            };
        }
    });

    return data;

}

export {getMain, getDetail}