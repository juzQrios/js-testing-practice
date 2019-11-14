const caesarCipher = (string, offset) => {
  let decrypted = '';
  const invalidPattern = /[^a-zA-z]/;
  [...string].forEach((char) => {
    if (invalidPattern.test(char)) {
      decrypted += char;
    } else if (char === char.toUpperCase()) {
      decrypted += String.fromCharCode(((char.charCodeAt(0) - 65 + offset) % 26) + 65);
    } else if (char === char.toLowerCase()) {
      decrypted += String.fromCharCode(((char.charCodeAt(0) - 97 + offset) % 26) + 97);
    }
  });

  return decrypted;
};

export default caesarCipher;
