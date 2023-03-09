
$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");


function validateSignupForm() {
	let mail = document.getElementById("signEmail").value;
	let name = document.getElementById("signName").value;
	let password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
}

// seleksi form login
const loginForm = document.forms["loginForm"];

// menambahkan event listener pada form login ketika disubmit
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // menghentikan default behavior submit form

  // lakukan validasi login di sini
  // ...
  function validateLoginForm() {
	let name = document.getElementById("logName").value;
	let password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully logged in");
		return true
	}
}

  // jika login berhasil
  window.location.href = "index.html"; // arahkan ke halaman index
});

