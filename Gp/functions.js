

const userId = document.getElementById('userId');
const name = document.getElementById('firstName');
const password = document.getElementById('userpsw');

const phonenumber = document.getElementById('phonenumber');
const pan = document.getElementById('pannumber');
const date = document.getElementById('date');
const eform = document.getElementById('type');

// const employetype = document.getElementById('etype');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('/employee');

var myKey;
const delay = ms => new Promise(res => setTimeout(res, ms));



function doMyThing(snap) {
    myKey = snap.numChildren();
    console.log(myKey + 1);
    return myKey + 1;
}



function ref() {

    rootRef.once('value', function (snap) {
        if (snap) {
            doMyThing(snap);
        }
    });

}

ref();

addBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await delay(5000);
    var number = myKey + 1;
    var emptype = (eform.value).substr(0, 1);
    // console.log(emptype);
    var str = "SPA" + emptype + number;
    try {
        rootRef.child(str).set({
            Name: firstName.value,
            Phonenumber: "+91" + phonenumber.value,
            Date: date.value,
            Password: '',
            Employeetype: eform.value,
            Pannumber: pannumber.value

        });
        alert('Your Employee Id is' + " " + str);
        // userId.value = '';
        firstName.value = '';
        phonenumber.value = '';
        date.value = '';
        // password.value = '';
        eform.value = '';
        pannumber.value = '';

    }
    catch (err) {
        alert("Something went wrong please try again");
    }

});

// updateBtn.addEventListener('click', e => {
//     e.preventDefault();
//     const newData = {
//         Name: firstName.value,
//         Phonenumber: phonenumber.value,
//         Date: date.value,
//         Password: password.value,
//     };
//     rootRef.child(userId.value).update(newData);
// });

// removeBtn.addEventListener('click', e => {
//     e.preventDefault();
//     rootRef.child(userId.value).remove()
//         .then(() => {
//             window.alert('Employee is Sucessfully removed ');
//         })
//         .catch(error => {
//             console.error(error);
//         });
// });

// rootRef.child(0).on('child_changed', snapshot => {
//     console.log(snapshot.value());
// });

// rootRef.orderByKey().on('value', snapshot => {
//     console.log(snapshot.val());
// });

