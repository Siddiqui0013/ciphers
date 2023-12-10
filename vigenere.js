enSolution.style.display = "none";
deSolution.style.display = "none";
decrypt.style.display = "none";
// encrypt.style.display = "none"

decryptBtn.addEventListener("click", () => {
	eKey.value = "";
	ePlain.value = "";
	eText.value = "";
	decrypt.style.display = "block";
	encrypt.style.display = "none";
});

encryptBtn.addEventListener("click", () => {
	dKey.value = "";
	ceaserText.value == "";
	dText.value = "";
	decrypt.style.display = "none";
	encrypt.style.display = "block";
});
function vigenereCipher(text, keyword, encrypt) {
	let result = "";
	let keyIndex = 0;

	for (let i = 0; i < text.length; i++) {
		const currentChar = text.charAt(i);
		const isAlphabetic = /[A-Za-z]/.test(currentChar);

		if (isAlphabetic) {
			const shift = keyword.charAt(keyIndex % keyword.length);
			const shiftValue = shift.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);

			let charCode = currentChar.toUpperCase().charCodeAt(0);
			if (!encrypt) {
				charCode -= shiftValue;
				if (charCode < "A".charCodeAt(0)) {
					charCode += 26;
				}
			} else {
				charCode += shiftValue;
				if (charCode > "Z".charCodeAt(0)) {
					charCode -= 26;
				}
			}

			let newChar = String.fromCharCode(charCode);
			if (currentChar !== currentChar.toUpperCase()) {
				newChar = newChar.toLowerCase();
			}

			result += newChar;
			keyIndex++; // Increment keyIndex only when processing an alphabetic character
		} else {
			result += currentChar;
		}
	}

	return result;
}

Ebtn.addEventListener("click", () => {
	let key = eKey.value;
	const plainText = ePlain.value;
	const cipher = vigenereCipher(plainText, key, true);
	enSolution.style.display = "block";
	eText.value = cipher;
});

Decryptbtn.addEventListener("click", () => {
	let key = dKey.value;
	const cipherText = ceaserText.value;
	const cipher = vigenereCipher(cipherText, key, false);
	deSolution.style.display = "block";
	dText.value = cipher;
});
