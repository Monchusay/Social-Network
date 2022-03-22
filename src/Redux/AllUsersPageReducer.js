let initialState = {
UsersData : [
    {
        id:1,
        followed: true,
        profilePicture: "https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
        fullName: "Pepega",
        status: "Тик-токер со стажем 40 лет",
        location: "Russia"
    },
    {
        id:2,
        followed: false,
        profilePicture: "https://kuban24.tv/wp-content/uploads/2020/02/zoomzoom.jpg",
        fullName: "OmegaRofler2015",
        status: "Восходящая звезда BrawlStars киберспорта",
        location: "Russia"
    },
    {
        id:3,
        followed: true,
        profilePicture: "https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg",
        fullName: "DimaP",
        status: "Тупо батя",
        location: "Russia"
    }
]
}

const AllUsersPageReducer = (state =initialState,action) => {

    let stateCopy;
    stateCopy = {...state}
    stateCopy.UsersData = [...state.UsersData]

    switch (action.type) {
        case "FOLLOW":
            let userIndex = stateCopy.UsersData.findIndex((user) => user.id === action.id);
            stateCopy.UsersData[userIndex].followed = false;
            return stateCopy;
        case "UNFOLLOW":
            let userIndex1 = stateCopy.UsersData.findIndex((user) => user.id === action.id);
            stateCopy.UsersData[userIndex1].followed = true;
            return stateCopy;
        case "SET_USERS":
    }
    return state;
}

export const makeFollowActionCreator = (id) => {
    return {
        type: "FOLLOW",
        id: id
    };
};
export const makeUnfollowActionCreator = (id) => {
    return {
        type: "UNFOLLOW",
        id: id
    };
};
/*export const setUsers = (users) => {
    return {
        type: "SET_USERS",
        users: users
    };
};*/

export default AllUsersPageReducer