
const name = document.getElementById('firstName');
const password = document.getElementById('userpsw');

const phonenumber = document.getElementById('phonenumber');
const pan = document.getElementById('pannumber');
const date = document.getElementById('date');
const eform = document.getElementById('type');
const customertype = document.getElementById('customertype');

// const employetype = document.getElementById('etype');
const addBtn = document.getElementById('addBtn');
// const updateBtn = document.getElementById('updateBtn');
// const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('/customers');

var Key;
const delay = ms => new Promise(res => setTimeout(res, ms));



function uniquekey(snap) {
    Key = snap.numChildren();
    console.log(Key + 1);
    return Key + 1;
}



function ref() {

    rootRef.once('value', function (snap) {
        if (snap) {
            uniquekey(snap);
        }
    });

}

ref();

addBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await delay(5000);
    var number = Key + 1;
    var emptype = (eform.value).substring(3);
    var ctype = (customertype.value).substr(0, 1);
    console.log(emptype);
    console.log(date.value);
    var datejoining = (date.value).substring(0, 4);
    var str = datejoining + ctype + emptype + number;
    try {
        rootRef.child(str).set({
            CustomerName: firstName.value,
            Phonenumber: "+91" + phonenumber.value,
            DateOfjoining: date.value,
            Password: '',
            Employeetype: eform.value,
            Customertype: customertype.value

        });
        alert('Your Customer Id is' + " " + str);
        // userId.value = '';
        firstName.value = '';
        phonenumber.value = '';
        date.value = '';
        // password.value = '';
        eform.value = '';
        customertype.value = '';

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

