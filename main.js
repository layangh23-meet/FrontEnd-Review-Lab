var press = 0;

function changeBackgrounColor() {
		press = press + 1;

	if (press % 2 != 0) {
		document.getElementsByTagName("body")[0].style.backgroundColor = "red";
	}

	else if (press % 2 == 0){
		document.getElementsByTagName("body")[0].style.backgroundColor = "green";
	}

};