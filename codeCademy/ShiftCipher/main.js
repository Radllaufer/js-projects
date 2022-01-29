class ShiftCipher {
    constructor(n) {
        this._n = n;
    }

    get n() {
        return this._n;
    }

    encrypt(s) {
        const charactersArray = s.split('');
        const decimalsArray = charactersArray.map( e => e = e.charCodeAt(0) );

        for (let i = 0; i < decimalsArray.length; i++) {
            if (decimalsArray[i] >= 97 && decimalsArray[i] <= 122) {  // Check if character is a letter
                if ( (decimalsArray[i] + this.n) > 122 ) {
                    decimalsArray[i] += (this.n - 58); // go back to 'A'
                } else {
                    decimalsArray[i] += (this.n - 32); // Go to uppercase range
                }
            }
        }

        const encryptedArray = decimalsArray.map( e => e = String.fromCharCode(e) );
        return encryptedArray.join('');
    }

    decrypt(s) {
        const charactersArray = s.split('');
        const decimalsArray = charactersArray.map( e => e.charCodeAt(0) );

        for (let i = 0; i < decimalsArray.length; i++) {
            if (decimalsArray[i] >= 65 && decimalsArray[i] <= 90) {
                if ( (decimalsArray[i] - this.n) < 65) {
                    decimalsArray[i] += (58 - this.n);
                } else {
                    decimalsArray[i] += (32 - this.n);
                    console.log(decimalsArray[i]);
                }
            }
        }

        const decryptedArray = decimalsArray.map( e => e = String.fromCharCode(e) );
        return decryptedArray.join('');
    }
}

const cipher = new ShiftCipher(1);

console.log(cipher.encrypt('xyz'));

console.log(cipher.decrypt('ABC'));