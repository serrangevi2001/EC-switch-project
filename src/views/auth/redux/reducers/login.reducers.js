// eslint-disable-next-line
import { loginSucess } from "../actions/login.actions";
import { LOGIN_SUCCESS, SET_DETAILS, SET_DEVICELIST, SET_PROFILE, SET_USERFORM, SET_USERLIST } from "../constants/login.constants";

const initialState=             // we get object input
{
    details:{} ,  //api object will get response
    profile:{},   //profile api null
    email:null,                                        // why using nill means we using the single object in the object
    access_token:null,
    expires_in:null,
    isAuth:false,                //if three object can initial null means false if this function is correct means convert true
    userList:[],
    totalCount:0,
    totalCountDeviceList:0,
    userForm:{}
}



// eslint-disable-next-line
const loginReducer=(state=initialState,action)=>{// eslint-disable-next-line
    switch(action.type){  // it's like if statement 
        case SET_DETAILS:{        // using SET_DETAILS 
            const {details}=action.payload;
            console.log('details',details)
            return{
                ...state,
                // eslint-disable-next-line
                details:details  // eslint-disable-next-line
            }
        }
        case SET_PROFILE:{               // checking the empty structure
            const {profile}=action.payload;
            console.log('profile',profile);
            return{
                ...state,
                // eslint-disable-next-line
                profile:profile
            }
        }
        case LOGIN_SUCCESS:{
            // eslint-disable-next-line
            const {email,access_token,expires_in}=action.payload; 
            console.log('email:',email,'access_token',access_token,'expires_in',expires_in)
            return{
                ...state,
                // eslint-disable-next-line
                email,access_token,expires_in,isAuth:true
            }
        }
        // eslint-disable-next-line
        case SET_USERLIST:{
            const {userList}=action.payload;
            console.log('userList:',userList)
            return{
                ...state,
                // eslint-disable-next-line
                userList:userList && userList.value,
                totalCount:userList['@odata.count']  // Inside the userlist count asign
            }
        }

        case SET_DEVICELIST:{
            const {deviceList}=action.payload;
            console.log('userList:',deviceList)
            return{
                ...state,
                // eslint-disable-next-line
                deviceList:deviceList && deviceList.value,
                totalCountDeviceList:deviceList['@odata.count']  // Inside the userlist count asign
            }
        }
        case SET_USERFORM:{
            const {userForm}=action.payload;
            console.log('userForm:',userForm)
            return{
                ...state,
                // eslint-disable-next-line
                userForm:userForm,
            
            }
        }
        
        // eslint-disable-next-line
        default:
            return state;

        
    }
}

export default loginReducer;