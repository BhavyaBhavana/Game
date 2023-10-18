function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    
    player1_password = document.getElementById("player1_password_input").value;
    player2_password = document.getElementById("player2_password_input").value;
    
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    
    localStorage.setItem("player1_password",player1_password);
    localStorage.setItem("player2_password",player2_password);
    
    window.location = "game_page.html";
}