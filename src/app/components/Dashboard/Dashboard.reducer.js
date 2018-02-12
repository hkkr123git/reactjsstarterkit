const DashboardReducer = (state = {
    data: ""
}, action) => {
    switch (action.type) {
        case "DASHBOARD_SET_DATA":
            state = {
                ...state,
                data: action.payload
            };
            break;
    }
    return state;
};

export default DashboardReducer;