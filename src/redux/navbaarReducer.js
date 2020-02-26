const initialState = {
    friends: [
        {
            name: 'Sveta',
            src: 'https://avatars.mds.yandex.net/get-pdb/1365420/2a6155fa-b07a-4eb8-aa3c-f603106f03db/s1200'
        },
        {name: 'Petr', src: 'https://ru.fishki.net/picsw/032011/02/post/portret/portret-027.jpg'},
        {
            name: 'Vlasa',
            src: 'https://avatars.mds.yandex.net/get-pdb/916253/397597be-eb81-45a1-a4bb-1538a74253b0/s1200'
        }
    ]
};

function navbaarReducer(navbaar = initialState, action) {

    return navbaar;
}

export default navbaarReducer;