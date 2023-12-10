enSolution.style.display = "none"
deSolution.style.display = "none"
decrypt.style.display = "none"
// encrypt.style.display = "none"

decryptBtn.addEventListener("click", ()=>{
    eKey.value = "";
    ePlain.value = "";
    eText.value = "";
    decrypt.style.display = "block"
    encrypt.style.display = "none"
})

encryptBtn.addEventListener("click", ()=>{
    dKey.value = "";
    ceaserText.value == "";
    dText.value = "";
    decrypt.style.display = "none"
    encrypt.style.display = "block"
})

Ebtn.addEventListener("click", ()=>{
    // body.style.display = "none"
    let Ekey = Number.parseInt(eKey.value)
    console.log(Ekey)
    console.log(typeof(Ekey))
    if (ePlain.value.trim() === "") {
        alert("Please Enter a Text")
    }


 else if (isNaN(Ekey) || Ekey < -26 || Ekey > 26) {
    // alert("Please Enter a Valid Key")
    alert("Please Enter a Valid Key")

}

    else {
    const plainText = ePlain.value
    let CeaserArr= plainText.split("")

    // if(Ekey > -26 && Ekey < 26){
    
    
    // }

let EnArr = CeaserArr.map((ch) => {
    // console.log(ch);
    let ChCode = ch.charCodeAt();
    let NewChCode;

    if (ch >= 'A' && ch <= 'Z') {
        NewChCode = ChCode + Ekey;
        if (NewChCode > 'Z'.charCodeAt(0)) {
            NewChCode -= 26;
        }
    } else if (ch >= 'a' && ch <= 'z') {
        NewChCode = ChCode + Ekey;
        if (NewChCode > 'z'.charCodeAt(0)) {
            NewChCode -= 26;
        }
    } else {
        // Handle non-alphabet characters
        NewChCode = ChCode;
    }

    let NewCh = String.fromCharCode(NewChCode);
    // console.log(NewCh);
    // console.log("");

    return NewCh;
});
        
const EnString = EnArr.join('')

enSolution.style.display = "block"
eText.value = EnString
// console.log(EnString)
}
})




Decryptbtn.addEventListener("click", () => {
    let Ekey = Number.parseInt(dKey.value)

    if (ceaserText.value == "") {
        alert("Please Enter a Text")
    } 
    else if (isNaN(Ekey) || Ekey < -26 || Ekey > 26) {
        alert("Please Enter a Valid Key")
    }
    else {
        const ceaser = ceaserText.value;
        let CeaserArr = ceaser.split("");
        let Dkey = Number.parseInt(dKey.value);

        let DeArr = CeaserArr.map((ch) => {
            if (ch >= 'A' && ch <= 'Z') {
                let ChCode = ch.charCodeAt();
                let NewChCode = ChCode - Dkey;
                if (NewChCode < 'A'.charCodeAt(0)) {
                    NewChCode += 26; // Wrap around to the end of the range
                }
                return String.fromCharCode(NewChCode);
            } else if (ch >= 'a' && ch <= 'z') {
                let ChCode = ch.charCodeAt();
                let NewChCode = ChCode - Dkey;
                if (NewChCode < 'a'.charCodeAt(0)) {
                    NewChCode += 26; // Wrap around to the end of the range
                }
                return String.fromCharCode(NewChCode);
            } else {
                // Handle non-alphabet characters by returning them as is
                return ch;
            }
        });

        const EnString = DeArr.join('');

        deSolution.style.display = "block";
        dText.value = EnString;
    }
});



//     let EnArr = CeaserArr.map((ch)=>{
//            let ChCode = ch.charCodeAt()
//            console.log(ChCode)
//            let NewChCode
//            if (ch >= 'A' && ch <= 'Z') {
//             if (NewChCode > 'Z'.charCodeAt(0)) {
//                 NewChCode -= 26;
//             }
//         }
//         else if (ch >= 'a' && ch <= 'z') {
//             if (NewChCode > 'Z'.charCodeAt(0)) {
//                 NewChCode -= 26;
//             }
//             // NewChCode = ChCode+Ekey
//         }
//         NewChCode = ChCode+Ekey

//            let NewCh = String.fromCharCode(NewChCode)
//            return NewCh
//         })












// Hide these elements initially
// enSolution.style.display = "none";
// deSolution.style.display = "none";

// // Event listeners
// decryptBtn.addEventListener("click", () => {
//     decrypt.style.display = "block";
//     encrypt.style.display = "none";
// });

// encryptBtn.addEventListener("click", () => {
//     decrypt.style.display = "none";
//     encrypt.style.display = "block";
// });

// function processText(input, output, key, isEncryption) {
//     if (input.value == "") {
//         alert("Please Enter a Text");
//     } else {
//         const plainText = input.value;
//         const CeaserArr = plainText.split("");
//         const Ekey = Number.parseInt(key.value);

//         const EnArr = CeaserArr.map((ch) => {
//             const ChCode = ch.charCodeAt();
//             let NewChCode;

//             if (ch >= 'A' && ch <= 'Z') {
//                 NewChCode = isEncryption ? ChCode + Ekey : ChCode - Ekey;
//                 if (isEncryption && NewChCode > 'Z'.charCodeAt(0)) {
//                     NewChCode -= 26;
//                 } else if (!isEncryption && NewChCode < 'A'.charCodeAt(0)) {
//                     NewChCode += 26;
//                 }
//             } else if (ch >= 'a' && ch <= 'z') {
//                 NewChCode = isEncryption ? ChCode + Ekey : ChCode - Ekey;
//                 if (isEncryption && NewChCode > 'z'.charCodeAt(0)) {
//                     NewChCode -= 26;
//                 } else if (!isEncryption && NewChCode < 'a'.charCodeAt(0)) {
//                     NewChCode += 26;
//                 }
//             } else {
//                 NewChCode = ChCode; // Keep non-alphabet characters unchanged
//             }

//             const NewCh = String.fromCharCode(NewChCode);
//             return NewCh;
//         });

//         const EnString = EnArr.join("");

//         output.style.display = "block";
//         output.value = EnString;
//     }
// }

// Ebtn.addEventListener("click", () => {
//     processText(ePlain, eText, eKey, true);
// });

// Decryptbtn.addEventListener("click", () => {
//     processText(ceaserText, dText, dKey, false);
// });

// let plainText = "xyz"
// let CeaserArr= plainText.split("")
//     let Ekey = 3

//     let EnArr = CeaserArr.map((ch)=>{
//         console.log(ch)
//            let ChCode = ch.charCodeAt()
//         //    console.log(ChCode)
//            let NewChCode
//            if (ch >= 'A' && ch <= 'Z') {
//             if (NewChCode > 'Z'.charCodeAt(0)) {
//                 NewChCode -= 26;
//             }
//         }
//         else if (ch >= 'a' && ch <= 'z') {
//             if (NewChCode > 'Z'.charCodeAt(0)) {
//                 NewChCode -= 26;
//             }
//             // NewChCode = ChCode+Ekey
//         }
//         NewChCode = ChCode+Ekey

//            let NewCh = String.fromCharCode(NewChCode)
//            console.log(NewCh)
//            console.log("")

//            return NewCh
//         })
//         console.log(EnArr)







// let plainText = "XYZ 69";
// let CeaserArr = plainText.split("");
// let Ekey = 3;

// let EnArr = CeaserArr.map((ch) => {
//     console.log(ch);
//     let ChCode = ch.charCodeAt();
//     let NewChCode;

//     if (ch >= 'A' && ch <= 'Z') {
//         NewChCode = ChCode + Ekey;
//         if (NewChCode > 'Z'.charCodeAt(0)) {
//             NewChCode -= 26;
//         }
//     } else if (ch >= 'a' && ch <= 'z') {
//         NewChCode = ChCode + Ekey;
//         if (NewChCode > 'z'.charCodeAt(0)) {
//             NewChCode -= 26;
//         }
//     } else {
//         // Handle non-alphabet characters
//         NewChCode = ChCode;
//     }

//     let NewCh = String.fromCharCode(NewChCode);
//     console.log(NewCh);
//     console.log("");

//     return NewCh;
// });

// console.log(EnArr);
