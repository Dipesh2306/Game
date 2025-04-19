const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", function () {
  if (!player.classList.contains("jump")) {
    player.classList.add("jump");
    setTimeout(() => player.classList.remove("jump"), 500);
  }
});

setInterval(function () {
  const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if (obstacleLeft < 100 && obstacleLeft > 0 && playerTop < 50) {
    alert("Game Over!");
    location.reload();
  }
}, 10);
