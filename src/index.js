import { Chip8 } from "./Chip8";

const chip8 = new Chip8();

chip8.registers.stackPush(1);
chip8.registers.stackPush(2);
chip8.registers.stackPush(3);

let result;

result = chip8.registers.stackPop();
console.log(result);

result = chip8.registers.stackPop();
console.log(result);

result = chip8.registers.stackPop();
console.log(result);
