import aesjs from 'aes-js';

export const AES = {
  decrypt(c: string, a: string, b: string): string {
    // c => Encrypted Hex String
    // a => (Key) Number Array
    // b => (IV) Initiliaztion Vector
    // When ready to decrypt the hex string, convert it back to bytes
    const encryptedBytes = aesjs.utils.hex.toBytes(c);
    const iv = aesjs.utils.hex.toBytes(b);
    const key = aesjs.utils.hex.toBytes(a);
    // The cipher-block chaining mode of operation maintains internal
    // state, so to decrypt a new instance must be instantiated.
    const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    const decryptedBytes = aesCbc.decrypt(encryptedBytes);
    const decryptedHex = aesjs.utils.hex.fromBytes(decryptedBytes);
    return decryptedHex;
  },
};
