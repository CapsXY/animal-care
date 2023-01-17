// verificar a data de nascimento
const birthDate = document.querySelector("#birth-date");

birthDate.addEventListener("blur", (event) => {
	checkBirthDate(event.target);
});

function checkBirthDate(input) {
	const dateReceived = new Date(input.value);
	let message = "";

	if (!above18(dateReceived)) {
		message = "Você deve ser maior que 18 anos para se cadastrar.";
	}

	input.setCustomValidity(message);
}

function above18(date) {
	const currentDate = new Date();
	const dateMore18 = new Date(
		date.getUTCFullYear() + 18,
		date.getUTCMonth(),
		date.getUTCDate()
	);

	return dateMore18 <= currentDate;
}
