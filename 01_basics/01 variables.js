const accountID =  144553
let accountEmail = "vlogitarian2003@gmail.com"
var accountPassword = "12345"
accountCity = "Chennai"

//accountID = 2
accountEmail = "hchc@gmail.com"
accountPassword = "2121212"   
accountCity = "Delhi"
let accountState;

console.log(accountID);

/*
prefer not to use var
because of issue in Block Scope and Functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])