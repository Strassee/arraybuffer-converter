export default class ArrayBufferConverter {
  constructor() {
    this.buffer = undefined;
    this.string = '';
  }

  load(buffer) {
    this.buffer = buffer.transfer();
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      this.string += String.fromCharCode(bufferView[i]);
    }
  }
}
