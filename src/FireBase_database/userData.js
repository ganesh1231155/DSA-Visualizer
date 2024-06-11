export default class userData{
    constructor() {
        this.userId='';
        this.userEmail='';
        this.userName='';
        this.userImg='';
        this.contact='';
    }
    setData(uid,email,name,contact){
        this.userId=uid;
        this.userName=name;
        this.userEmail=email;
        this.contact=contact;
        this.userImg='';
    }
    
    getUserId(){
        return this.userId;
    }
     getUserName(){
        return this.userName;
    }
    
    getEmail(){
        return this.userEmail;
    }
    getImg(){
        return this.userName;
    }
    getContact(){
        return this.contact;
    }
    setUserId(uid){
        this.userId=uid;
    }
    setUserName(name){
        this.userName=name;
    }
    setEmail(email){
        this.userEmail=email;
    }
    setImg(img){
        this.userImg=img;
    }
    setContact(contact){
        this.contact=contact;
    }
}

