import moment from "moment";        //install the library
import { LOGIN_SUCCESS, SET_DETAILS, SET_DEVICELIST, SET_PROFILE, SET_USERFORM, SET_USERLIST } from "../constants/login.constants";
// eslint-disable-next-line
import agent from '../services/agent'
import { getToken } from "../../helper/common";
// eslint-disable-next-line
import userList from "../../../apps/userList/userList";

// import loginReducer from "../reducers/login.reducers";
// import loginReducer from "../reducers/login.reducers";

// eslint-disable-next-line
export const setDetails = (details) => ({
    type: SET_DETAILS,
    payload: { details }
})

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    payload: { profile }
})
// eslint-disable-next-line
export const loginSucess = (email, access_token, expires_in) => ({
    type: LOGIN_SUCCESS,  // eslint-disable-next-line
    payload: { email, access_token, expires_in }
})

// eslint-disable-next-line
export const setUserList = (userList) => ({
    type: SET_USERLIST,
    payload: { userList }
})

export const setDeviceList = (deviceList) => ({
    type: SET_DEVICELIST,
    payload: { deviceList }
})
export const setUserForm = (userForm) => ({
    type:SET_USERFORM,
    payload: { userForm }
})






export const setTokenDetails = (authData) => {
    console.log('setTokenDetails:', authData)
    // eslint-disable-next-line
    const { access_token, expires_in, token_type } = authData;
    console.log('access_token:', access_token)
    console.log('expired_in:', expires_in)
    console.log('token_type:', token_type)
    // eslint-disable-next-line
    const expires = moment().unix() + expires_in
    console.log('expires:', expires)
    localStorage.setItem("access_token", access_token)
    localStorage.setItem('expired_in', expires)
    localStorage.setItem('token_type', token_type)

}

export const userLogin = () => (dispatch, getState) => {  //getstate can store the all details 
    const currentState = getState();
    console.log('currentState:', currentState);
    const { loginReducer } = currentState;
    console.log('loginReducer', loginReducer);
    const { details } = loginReducer;
    console.log('details', details);
    const { email, password } = details;
    console.log('email', email);
    console.log('password', password);
    agent.Auth.login(email, password)    //argument sent (email,password)
        .then((authData) => {                           //response
            console.log('authData:', authData);    //authdata inside the accesstoken token
            // eslint-disable-next-line
            setTokenDetails(authData)     //can store the data in local storage in settokendetails
             // eslint-disable-next-line
            const { access_token, expires_in } = authData
            console.log('access_token:', access_token)
            console.log('expires_in:', expires_in)


            agent.Auth.getProfile(access_token)         // it can be set token details to get the access_token the function to passing to the profile api
                // eslint-disable-next-line
                .then((getProfile) => {
                    console.log('getProfile:', getProfile);
                    dispatch(setProfile(getProfile))
                    // eslint-disable-next-line
                    dispatch(loginSucess(getProfile.email, access_token, expires_in))

                })
        })
}
export const getUserList=(page,pageSize)=>(dispatch)=>{
    
    
    getToken()
   //eslint-disable-next-line
    .then((access_token)=>{
        console.log('access_token',access_token);  
        console.log('page',page)
        console.log('pageSize',pageSize)
        agent.Auth.getUserList(access_token, page,pageSize)     //userlist API call
        
        // eslint-disable-next-line
        .then((userlist)=>{
            console.log('userList:',userlist)
            // const {value}=userList
            // console.log('value:',value)
            dispatch(setUserList(userlist));
        })
    })
    
}

export const getDeviceList=(page,pageSize)=>(dispatch)=>{
    // console.log('pageDeviceList',page)
    // console.log('pageSizeDeviceList',pageSizeDeviceList)

    getToken()
    // eslint-disable-next-line
    .then((access_token)=>{
        console.log('access_token_DeviceList',access_token);  
        console.log('pageDeviceList',page)
        console.log('pageSizeDeviceList',pageSize)
        agent.Auth.getDeviceList(access_token, page,pageSize) 
        
        .then((devicelist)=>{
            console.log('userList:',devicelist)
            // const {value}=userList
            // console.log('value:',value)
            dispatch(setDeviceList(devicelist));
        })

    })


}




