/* REGISTER */
function register() {
    let u = document.getElementById("user").value;
        let p = document.getElementById("pass").value;
    if(u === "" || p === ""){
            alert("Enter Username & Password");
                    return;
                        }
    localStorage.setItem("username", u);
        localStorage.setItem("password", p);
    alert("Registered Successfully!");
    }
/* LOGIN */
function login() {
    let u = document.getElementById("user").value;
        let p = document.getElementById("pass").value;
    let savedUser = localStorage.getItem("username");
        let savedPass = localStorage.getItem("password");
    if(u === savedUser && p === savedPass){
            localStorage.setItem("login", "true");
                    window.location.href = "home.html";
                        } else {
                                alert("Invalid Login!");
                                    }
                                    }
/* CHECK LOGIN */
function checkLogin(){
    let isLogin = localStorage.getItem("login");
        if(!isLogin){
                window.location.href = "login.html";
                    }
                    }
/* LOGOUT */
function logout(){
    localStorage.removeItem("login");
        window.location.href = "login.html";
        }
/* ADD BUS */
function addBus(){

    let file = document.getElementById("imageFile").files[0];
    if(!file){
            alert("Select Image");
                    return;
                        }
    let reader = new FileReader();
    reader.onload = function(e){
        let bus = {
                    name: document.getElementById("name").value,
                                number: document.getElementById("number").value,
                                            route: document.getElementById("route").value,
                                                        time: document.getElementById("time").value,
                                                                    image: e.target.result
                                                                            };
        let buses = JSON.parse(localStorage.getItem("buses")) || [];
                buses.push(bus);
        localStorage.setItem("buses", JSON.stringify(buses));
        alert("Bus Added!");
            };
    reader.readAsDataURL(file);
    }
/* LOAD DATA */
function loadBuses(){

    let buses = JSON.parse(localStorage.getItem("buses")) || [];
        let container = document.getElementById("busContainer");
    if(buses.length === 0){
            container.innerHTML = "<h3>No Data Found</h3>";
                    return;
                        }
    buses.forEach(function(bus){
            container.innerHTML += `
                    <div class="card">
                                <img src="${bus.image}"
onclick="openMap('${bus.route}')">
                                            <h3>${bus.name}</h3>
                                                        <p>${bus.number}</p>
                                                                    <p>${bus.route}</p>
                                                                                <p>${bus.time}</p>
                                                                                        </div>
                                                                                                `;
                                                                                                    });
                                                                                                    }
/* MENU */
function openMenu(){
    document.getElementById("sidebar").style.width="200px";
    }
function openMap(route) {
    let url = "https://www.google.com/maps/search/" + encodeURIComponent(route);
    window.open(url, "_blank");
}
