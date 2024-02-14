import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAnC3PQzOC--fDG0DRDUihKkk3on8cGN_4",
    authDomain: "practice-9baa8.firebaseapp.com",
    projectId: "practice-9baa8",
    storageBucket: "practice-9baa8.appspot.com",
    messagingSenderId: "393488946747",
    appId: "1:393488946747:web:47d7adffa416c243da6e1e"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

async function Register(userInfo) {
    try {

        const { fullname, age, email, password } = userInfo
        console.log("🚀 ~ Register ~ userInfo:", userInfo)


          await createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log("🚀 ~ returnawaitcreateUserWithEmailAndPassword ~ res:", res)
            
            alert('registered successfully')
            return res

        })
        
        await addDoc(collection(db, "users"), {
            fullname,
            age,
            email,
            
          });
        

    } catch (e) {
        alert(e.message)
    }


}

async function Login(userInfo) {
    try {

        const { email, password } = userInfo


        return await signInWithEmailAndPassword(auth, email, password).then((res) => {
            console.log("🚀 ~ returnawaitsignInWithEmailAndPassword ~ res:", res)
            alert('Login Successfully')
            return res
        })
    } catch (e) {
        alert(e.message)
    }
}

async function PostAdd(ad) {
    try{
        const {productname, price, description, quantity, image}= ad
        
        
        const storage = getStorage();
        const storageRef = ref(storage, `ad/${image.name}`);
        
        await uploadBytes(storageRef, image)
        alert('image uploaded successfully')
        
        const url = await getDownloadURL(storageRef)
        console.log("🚀 ~ postData ~ url:", url)
        
        
        await addDoc(collection(db, "PostAds"), {
            productname,
            price,
        description,
        quantity,
        imageUrl:url
    });
    alert('post add successfully')
}catch(e){
    alert(e.message)
}
}
const getDataFromApi = async()=>{
    const querySnapshot = await getDocs(collection(db, 'PostAds'));
    const ads=[]
querySnapshot.forEach((doc) => {
    const ad=doc.data();
    ad.id=doc.id
    ads.push(ad);

});
return ads;

}

const userLogout = async () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        alert('Successfully logout!')
    }).catch((error) => {
        // An error happened.
    });
}

export {
    Register,
    Login,
    PostAdd,
    getDataFromApi,
    userLogout
};
