// Problem 59
// ==========
// 
// Each character on a computer is assigned a unique code and the preferred
// standard is ASCII (American Standard Code for Information Interchange).
// For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.
// 
// A modern encryption method is to take a text file, convert the bytes to
// ASCII, then XOR each byte with a given value, taken from a secret key. The
// advantage with the XOR function is that using the same encryption key on
// the cipher text, restores the plain text; for example, 65 XOR 42 = 107,
// then 107 XOR 42 = 65.
// 
// For unbreakable encryption, the key is the same length as the plain text
// message, and the key is made up of random bytes. The user would keep the
// encrypted message and the encryption key in different locations, and
// without both "halves", it is impossible to decrypt the message.
// 
// Unfortunately, this method is impractical for most users, so the modified
// method is to use a password as a key. If the password is shorter than the
// message, which is likely, the key is repeated cyclically throughout the
// message. The balance for this method is using a sufficiently long password
// key for security, but short enough to be memorable.
// 
// Your task has been made easy, as the encryption key consists of three
// lower case characters. Using cipher1.txt, a file containing the encrypted
// ASCII codes, and the knowledge that the plain text must contain common
// English words, decrypt the message and find the sum of the ASCII values
// in the original text.

var cipher = require("fs").readFileSync("cipher1.txt", {encoding: "utf-8"}).replace("\r\n", "").split(",");
cipher.push('0');
cipher.push('0');

for(var a = 97; a <= 122; a++) {
	for(var b = 97; b <= 122; b++) {
		for(var c = 97; c <= 122; c++) {
			var working = Array(cipher.length);
			for(var i = 0; i < cipher.length; i += 3) {
				working[i    ] = cipher[i    ] ^ a;
				working[i + 1] = cipher[i + 1] ^ b;
				working[i + 2] = cipher[i + 2] ^ c;
			}
			if(working.map(x => String.fromCharCode(x)).join("").split(" the ").length > 2) {
				return working.slice(0, -2).reduce((a, b) => a + b);
			}
		}
	}
}
return 0;
