import { onAuthStateChanged, getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
const auth = getAuth();

function signout() {
    signOut(auth).then(() => {
        // Sign-out successful.
        // console.log("signed out successfully")
    }).catch((error) => {
        // An error happened.
        // console.log("some error occured!!")
    });
}

document.getElementById("btnSignOut").addEventListener('click', signout);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user.email)
        // document.getElementById("user-email").innerText = user.email;
        // const uid = user.uid;
        // ...
    } else {
        console.log("signed out")
        window.location.href = "http://127.0.0.1:5500/signin.html"
    }
});