// 결과를 확인하고 싶으면 터미널에 node test4.js를 입력하세요.

// 구구단 2단부터 9단까지 출력하는 코드를 작성하세요.
// 조건1. 2부터 9단까지만 출력되어야 합니다.
// 조건2. 이중 for문을 사용해야 합니다.

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log("이중 for문을 사용하여 구구단 2단부터 9단까지 출력되는 정답은 " + `${i} x ${j} = ${i * j}` + "입니다.");
  }
}
