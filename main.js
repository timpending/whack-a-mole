$(document).ready(function(){

// Need to add Scoreboard function
// Enable the timer function
// Reset after 30 seconds
// randomly assign locations for the moles to appear using random and position on grid.  Have a bounce animation to have them pop up
// 50 / 50 shot with your Mole-Whacker?
// More Powerful Moles that take multiple hits to beat
// ADD SOUND, BLOOD

//Hide moles on load
$(".mole").hide("drop", {direction: "down"}, 800);

//Moles Remaining Counter
var moleCount = 12;
// var timeLeft = 0;

// Update Mole Counter & Timer
var updateMoleCount = function(){
    $(".molesRemaining").html(moleCount+" moles remain!");
};
updateMoleCount();


// Button Functions
$(".start").click(function(){
     $(".mole").show("bounce", {times: 5}, "slow");
     moleCount = 12;
     updateMoleCount();
     $(".molesRemaining").css("background", "none");

    //  timeLeft = setInterval("alert('error')",3000)
     //
    //  if (moleCount == 0 && timeLeft !== 3000) {
    //      alert("You win!");
    //      clearTimeout(timeLeft);
    //  } else if (moleCount !== 0 && timeLeft == 3000) {
    //      alert("Those pesky moles are back! Knock em dead!");
    //      $(".mole").show("bounce", {times: 3}, "slow");
    //      moleCount = 12;
    //      updateMoleCount();
    //      clearTimeout(timeLeft);
    //      //  setInterval("", 3000)
    //  } else {
    //      $(".timer").html(timeLeft+" seconds remain!");
    //      timeLeft--;
    //      console.log(timeLeft)
    //  }
})

$(".reset").click(function(){
    $(".mole").show("bounce", {times: 3}, "slow");
    moleCount = 12;
    updateMoleCount();
    $(".molesRemaining").css("background", "none");

})

// Mole Effects
$(".mole").hover(function(){
    $(this).css('cursor', 'crosshair');
})

$('.mole').click(function(){
    $(this).toggle("explode");
    moleCount--;
    updateMoleCount();
    if (moleCount !== 0) {
    } else {
        $(".molesRemaining").html("MOLES ERATICATED");
        $(".molesRemaining").css("background", "yellow");
    }
});


}); // End
