class Valid2 extends Valid {
	constructor(email, password) {
		super(email, password);
		this.emailError = '';
		this.passwordError = '';
		this.isValid = false;
	}
	validate() {
		this.password.length > 6 && this.email !== '' ? this.isValid = true : this.isValid = false;
		if(this.email === '') this.emailError = 'email empty';
		if(this.password.length < 6) this.passwordError = 'min length 6';

	}
}