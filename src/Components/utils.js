function isValidPanCardNo(panCardNo) {
    // Regex to check valid
    // PAN Number
    let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
 
    // if PAN Number 
    // is empty return false
    if (panCardNo == null) {
        return "false";
    }
 
    // Return true if the PAN NUMBER
    // matched the ReGex
    if (regex.test(panCardNo) === true) {
        return "true";
    }
    else {
        return "false";
    }
}
export default isValidPanCardNo;


// function Token(){
//     const token = sessionStorage.getItem('token');
//     console.log("torkn",token);

//     // Set the Authorization header with the token
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//     return config;
// }

