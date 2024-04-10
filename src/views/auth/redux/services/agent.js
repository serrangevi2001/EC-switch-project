import  superagentPromise from 'superagent-promise'
import _superagent from 'superagent'
//eslint-disable-next-line
import { getUserList } from '../actions/login.actions';

const superagent=superagentPromise(_superagent,Promise); //default line

const responseBody = (res) => res.body;  //response syntax and also response function of  line:14
const apiUrl = "https://api.ecswitchserver.com";

const request= {
    post:(url,body) =>    //post method
        superagent
        .post(url,body)
        .set("Content-Type","application/x-www-form-urlencoded")                //post inside the header
        .then (responseBody)  ,       //body of the content   

    getWithToken:(url,token)=>
        superagent
        .get(url,token)
        .set("Content-Type","application/json")
        .set("Authorization",`Bearer ${token}`)
        .then(responseBody),
        
}

const Auth={
    login:(email,password)=>{
        console.log("email:",email,"password:",password);   // pass to api  
        const formdata=
        //eslint-disable-next-line
        "username="+   
        encodeURIComponent(email)+
        "&password="+  // why using & means username using and then next using password ,so using (&) in password 
        encodeURIComponent(password)+
        "&grant_type=password";

        return request.post( `${apiUrl}/token`,formdata);
    },
    // eslint-disable-next-line
    getProfile:(access_token)=>{
        console.log('access_token',access_token);
        return request.getWithToken(`${apiUrl}/api/user/profile`,access_token)
    },
    //eslint-disable-next-line
    getUserList:(access_token, page, pageSize)=>{
        console.log('access_token:',access_token);
        console.log('pageApi:',page);
        console.log('pageSizeApi:',pageSize);
        return request.getWithToken(`${apiUrl}/odata/userlist?$count=true&$skip=${(page-1)*pageSize}&$top=${pageSize}`,access_token)

    },
// eslint-disable-next-line
    getDeviceList:(access_token, page, pageSize)=>{
        console.log('access_token:',access_token);
        console.log('pageDeviceListApi:',page);
        console.log('pageSizeDeviceListApi:',pageSize);
        return request.getWithToken(`${apiUrl}/odata/devicelist?$count=true&$skip=${(page-1)*pageSize}&$top=${pageSize}`,access_token)
    },
}

export default {Auth ,
}