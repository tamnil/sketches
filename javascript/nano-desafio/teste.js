let utf8decoder = new TextDecoder('utf-8');


function WalletToText (addr) {
    if (addr === null || addr.length < 64 || addr.length > 65 ) {
      return null
    }
    var prefixLen = 0
    if ( addr.startsWith("nano_")) {
        prefixLen = 5
        if ( addr.length != 65 ) return null
    }
    if ( addr.startsWith("xrb_") ) {
        prefixLen = 4
        if ( addr.length != 64 ) return null
    }
    if (prefixLen == 0) return null

console.log(typeof    Base32Decode("1111"+addr.substring(prefixLen, 56)))
    var text = Base32Decode("1111"+addr.substring(prefixLen, 56)).map(x=>{
        return x
    })

    console.log(utf8decoder.decode(text),'decoded')
    return text
  }

console.log(String.fromCharCode(67))


function Base32Decode (base32EncodedString) {
    console.log(base32EncodedString,'encoded str')
    /// <summary>Decodes a base32 encoded string into a Uin8Array, note padding is not supported</summary>
    /// <param name="base32EncodedString" type="String">The base32 encoded string to be decoded
    /// <returns type="Uint8Array">The Unit8Array representation of the data that was encoded in base32EncodedString</returns>
    if (!base32EncodedString && base32EncodedString !== "") {
        throw "base32EncodedString cannot be null or undefined";
    }

    if (base32EncodedString.length * 5 % 8 !== 0) {
        throw "base32EncodedString is not of the proper length. Please verify padding.";
    }

    base32EncodedString = base32EncodedString.toLowerCase();
    var alphabet = "13456789abcdefghijkmnopqrstuwxyz";
    var returnArray = new Array(base32EncodedString.length * 5 / 8);

    var currentByte = 0;
    var bitsRemaining = 8;
    var mask = 0;
    var arrayIndex = 0;

    for (var count = 0; count < base32EncodedString.length; count++) {
        var currentIndexValue = alphabet.indexOf(base32EncodedString[count]);
        if (-1 === currentIndexValue) {
            if ("=" === base32EncodedString[count]) {
                var paddingCount = 0;
                for (count = count; count < base32EncodedString.length; count++) {
                    if ("=" !== base32EncodedString[count]) {
                        throw "Invalid '=' in encoded string";
                    } else {
                        paddingCount++;
                    }
                }

                switch (paddingCount) {
                    case 6:
                        returnArray = returnArray.slice(0, returnArray.length - 4);
                        break;
                    case 4:
                        returnArray = returnArray.slice(0, returnArray.length - 3);
                        break;
                    case 3:
                        returnArray = returnArray.slice(0, returnArray.length - 2);
                        break;
                    case 1:
                        returnArray = returnArray.slice(0, returnArray.length - 1);
                        break;
                    default:
                        throw "Incorrect padding";
                }
            } else {
                throw "base32EncodedString contains invalid characters or invalid padding.";
            }
        } else {
            if (bitsRemaining > 5) {
                mask = currentIndexValue << (bitsRemaining - 5);
                currentByte = currentByte | mask;
                bitsRemaining -= 5;
            } else {
                mask = currentIndexValue >> (5 - bitsRemaining);
                currentByte = currentByte | mask;
                returnArray[arrayIndex++] = currentByte;
                currentByte = currentIndexValue << (3 + bitsRemaining);
                bitsRemaining += 3;
            }
        }
    }

    return new Uint8Array(returnArray);
};


console.log (WalletToText("xrb_1eb1bsipwust631k1jm7eop8cwum6348kwungbnp6xdneok41iukw8rrafup"))
