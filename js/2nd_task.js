

var Users = [
  {
    userName : "Ahmed",
    accNum : 123,
    balance : 1000,
  },
  {
    userName : "Muhammed",
    accNum : 456,
    balance :2000,
  },  
  {
    userName : "Asmaa",
    accNum : 789,
    balance : 3000,
  },  
  {
    userName : "Esraa",
    accNum : 101,
    balance : 4000,
  },

]

function newUser(name,balance,accNum){
  var _User = {
    userName: name,
    balance: balance,
    accNum: accNum,
  };
  Users.push(_User);
  
}
function editUser( accNum, newBalance ) {
  for (var i = 0; i < Users.length; i++) {
    if (Users[i].accNum== accNum) {
      Users[i].balance == newBalance;
    }
  }
}

function deleteUser(accNum) {
  for (var i = 0; i < Users.length; i++) {
    if (Users[i].accNum== accNum) {
      Users.splice(i,1);
    }
  }
}

function showUser(userNum) {
  console.table(Users[userNum])
}
function showUsers(usersNum) {
  for (var i = 0; i < usersNum; i++) {
    console.table(Users[i])
    }
  }
  showUser(1)
  newUser('aly',2500,1245)
  // console.table(Users)
  editUser(123,2000)
  deleteUser(123)
  console.table(Users)
