$("#btnTitle").click(function(){
    $("#title").text("Cliven's Profile")
})

$("#btnHide").click(function(){
    $(".info").hide(1000)
})

$("#btnShow").click(function(){
    $(".info").show(1000)
})

$("#btnTitle").mousedown(function(){
    $(this).css("background", "white")
})

$("#btnTitle").mouseup(function(){
    $(this).css("background", "black")
})

$("#btnShow").mousedown(function(){
    $(this).css("background", "white")
})

$("#btnShow").mouseup(function(){
    $(this).css("background", "black")
})

$("#btnHide").mousedown(function(){
    $(this).css("background", "white")
})

$("#btnHide").mouseup(function(){
    $(this).css("background", "black")
})

$("#btnTitle").click(function(){
    $(".message").text("You Clicked the Change Title Button!")
})

$("#btnShow").click(function(){
    $(".message").text("You Clicked the Show Profile Button!")
})

$("#btnHide").click(function(){
    $(".message").text("You Clicked the Hide Profile Button!")
})

$("#btnShow").mouseenter(function(){
    $(".message").text("Your mouse reach the Show Profile Button")
})

$("#btnShow").mouseleave(function(){
    $(".message").text("Mouse left the Show Profile Button")
})

$("#btnHide").mouseenter(function(){
    $(".message").text("Your mouse reach the Hide Profile Button")
})

$("#btnHide").mouseleave(function(){
    $(".message").text("Mouse left the Hide Profile Button")
})

$("#btnTitle").mouseenter(function(){
    $(".message").text("Your mouse reach the Change Title Button")
})

$("#btnTitle").mouseleave(function(){
    $(".message").text("Mouse left the Change Title Button")
})

$("#choose").change(function(){
    $("#kurso").text($(this).val())
})

$("#btnHide1").click(function(){
    $("#table").hide(1000)
})

$("#btnShow1").click(function(){
    $("#table").show(1000)
})

$("#btnOdd").click(function(){
    $("tr:odd").css("background", "gold")
    $("tr:even").css("background", "")
})

$("#btnEven").click(function(){
    $("tr:even").css("background", "gold")
    $("tr:odd").css("background", "")
})  

$("#choose").change(function(){
    $("#message1").text($(this).val())
})

$("#btnTitle").dblclick(function(){
    $(".message").text("You Double Clicked the Button!")
    $(this).css("background", "gold")
})

$("#btnShow").dblclick(function(){
    $(".message").text("You Double Clicked the Button!")
    $(this).css("background", "gold")
})

$("#btnHide").dblclick(function(){
    $(".message").text("You Double Clicked the Button!")
    $(this).css("background", "gold")
})


$("#btnOdd").click(function(){
    $("#message1").text("You Clicked the Odd Button!")
})

$("#btnEven").click(function(){
    $("#message1").text("You Clicked the Even Button!")
})

$("#btnHide1").click(function(){
    $("#message1").text("You Clicked the Hide Button!")
})

$("#btnShow1").click(function(){
    $("#message1").text("You Clicked the Show Button!")
})

$("#btnEven").mouseenter(function(){
    $("#message1").text("Your mouse reach the Even Button")
})

$("#btnEven").mouseleave(function(){
    $("#message1").text("Mouse left the Even Button")
})

$("#btnOdd").mouseenter(function(){
    $("#message1").text("Your mouse reach the Odd Button")
})

$("#btnOdd").mouseleave(function(){
    $("#message1").text("Mouse left the Odd Button")
})

$("#btnHide1").mouseenter(function(){
    $("#message1").text("Your mouse reach the Hide Button")
})

$("#btnHide1").mouseleave(function(){
    $("#message1").text("Mouse left the Hide Button")
})

$("#btnShow1").mouseenter(function(){
    $("#message1").text("Your mouse reach the Show Button")
})

$("#btnShow1").mouseleave(function(){
    $("#message1").text("Mouse left the Show Button")
})

$("#btnOdd").dblclick(function(){
    $("#message1").text("You Double Clicked the Button!")
    $(this).css("background", "gold")
})

$("#btnEven").dblclick(function(){
    $("#message1").text("You Double Clicked the Button!")
    $(this).css("background", "gold")
})

$("#btnHide1").dblclick(function(){
    $("#message1").text("You Double Clicked the Button!")
    $(this).css("background", "gold")
})

$("#btnShow1").dblclick(function(){
    $("#message1").text("You Double Clicked the Button!")
    $(this).css("background", "gold")
})

$("#btnEven").mousedown(function(){
    $(this).css("background", "white")
})

$("#btnEven").mouseup(function(){
    $(this).css("background", "black")
})

$("#btnShow1").mousedown(function(){
    $(this).css("background", "white")
})

$("#btnShow1").mouseup(function(){
    $(this).css("background", "black")
})

$("#btnHide1").mousedown(function(){
    $(this).css("background", "white")
})

$("#btnHide1").mouseup(function(){
    $(this).css("background", "black")
})

$("#btnOdd").mousedown(function(){
    $(this).css("background", "white")
})

$("#btnOdd").mouseup(function(){
    $(this).css("background", "black")
})
