document.addEventListener("DOMContentLoaded", () => {
  const socket = io("http://localhost:3000");

  // const p1 = document.getElementById("player_one");
  // const p2 = document.getElementById("player_two");
  // const p1Score = document.getElementById("player_one_score");
  // const p2Score = document.getElementById("player_two_score");

  function getScore() {
    socket.emit("get_score", "", function (resp) {
      console.log("callback worked", resp);

      // let player1 = resp[0];
      // let player2 = resp[1];

      // p1.innerText = player1.id;
      // p2.innerText = player2.id;
      // p1Score.innerText = `${player1.score}`;
      // p2Score.innerText = `${player2.score}`;
    });
  }

  // socket.on("get_score", (scoreArr) => {
  //   console.log("got the output", scoreArr);
  // });

  getScore();
});

// module.exports = {
//   score: (socket) => {
//     socket.on("game_play", (scoreArr) => {
//       console.log("result players", scoreArr);
//       debugger;
//     });
//   },
// };
