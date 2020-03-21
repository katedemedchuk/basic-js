class VigenereCipheringMachine {
    constructor(isDirect) {
      this.isReverse = (isDirect === false);
      this.code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    checkParams(paramA, paramB) {
      if (typeof paramA === 'undefined' || typeof paramB === 'undefined') throw new Error();
    }
  
    getResultString(array) {
      if (this.isReverse) return array.reverse().join('');
      return array.join('');
    }
  
    encrypt(message, key) {
      this.checkParams(message, key);
  
      const inputMessage = message.toUpperCase();
      const length = message.length;
      const keyRepeatTimes = Math.ceil(length / key.length);
      const keySentence = key.toUpperCase().repeat(keyRepeatTimes).split('');
      const encryptedMessage = [];
      let startIndex = null;
  
      for (let i = 0; i < length; i++) {
        startIndex = this.code.indexOf(inputMessage[i]);
        if (startIndex !== -1) {
          encryptedMessage.push(this.code[this.code.indexOf(keySentence.shift()) + startIndex]);
        } else {
          encryptedMessage.push(inputMessage[i]);
        }
      }
  
      return this.getResultString(encryptedMessage);
    }
  
    decrypt(encryptedMessage, key) {
      this.checkParams(encryptedMessage, key);
  
      const inputMessage = encryptedMessage.toUpperCase();
      const length = encryptedMessage.length;
      const keyRepeatTimes = Math.ceil(length / key.length);
      const keySentence = key.toUpperCase().repeat(keyRepeatTimes).split('');
      const decryptedMessage = [];
      let startIndex = null;
      let baseIndex = null;
  
      for (let i = 0; i < length; i++) {
        startIndex = this.code.indexOf(keySentence[0]);
        baseIndex = this.code.indexOf(inputMessage[i]);
  
        if (baseIndex !== -1) {
          keySentence.shift();
          if (baseIndex >= startIndex) {
            decryptedMessage.push(this.code[baseIndex - startIndex]);
          } else {
            decryptedMessage.push(this.code[baseIndex - startIndex + 26]);
          }
        } else {
          decryptedMessage.push(inputMessage[i]);
        }
      }
  
      return this.getResultString(decryptedMessage);
    }
  }
  
  module.exports = VigenereCipheringMachine;