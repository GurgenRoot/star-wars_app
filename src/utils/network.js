const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people'

// promise method
// export const getApiResource = () => {
//         return fetch(SWAPI_ROOT + SWAPI_PEOPLE)
//                 .then(res => res.json())
//                 .then(data => console.log(data))
//                 .catch(error => console.error(error.message))
// }

export const getApiResource = async (url) => {

        try {
                const res = await fetch(url);

                if (!res.ok) {
                        console.error('Could not fetch', res.status);
                        return false;
                }

                return await res.json();

        } catch (error) {
                console.error('Could not fetch', error.message);
        }

}

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then(res => console.log(res));

// (async () => {
//         const res = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//         console.log(res);
// })()
