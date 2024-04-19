/*
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (i + 1 - j == 1) {
      process.stdout.write("X\n");
      continue;
    }
    process.stdout.write("X");
  }
}
