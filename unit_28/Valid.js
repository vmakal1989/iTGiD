class Valid {
	constructor(email, password) {
		this.email = email;
		this.password = password;
		this.isValid = false;
	}
	validate() {
		this.password.length > 6 ? this.isValid = true : this.isValid = false;
		console.log(this.isValid);
	}
}