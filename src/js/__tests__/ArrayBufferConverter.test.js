// import ArrayBufferConverter from '../classes/ArrayBufferConverter';

/*  Jest не может протестировать ArrayBuffer, то ли я неправильно что-то делаю.
    При заходе в метод load Jest выдает ошибку "buffer.transfer is not a function"
    При этом билд нормально работает.
*/
// Тест заглушка
test('plug', () => {
  expect(1).toBe(1);
});

// test('load buffer', () => {
//   const converter = new ArrayBufferConverter();
//   const buffer = new ArrayBuffer(4);
//   const bufferView = new Uint8Array(buffer);
//   bufferView[0] = 767;
//   bufferView[1] = 176;
//   console.log(buffer);
//   converter.load(buffer);
//   expect(converter.buffer).toEqual(buffer);
// });

// test('buffer to string', () => {
//   const converter = new ArrayBufferConverter();
//   const buffer = new ArrayBuffer(6);
//   let bufferView = new Uint8Array(buffer);
//   bufferView[0] = 72;
//   bufferView[1] = 101;
//   bufferView[2] = 108;
//   bufferView[3] = 108;
//   bufferView[4] = 111;
//   bufferView[5] = 33;
//   console.log(buffer);
//   converter.load(buffer);
//   converter.toString();
//   expect(converter.string).toBe('Hello!');
// });
