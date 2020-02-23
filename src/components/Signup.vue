<template>
	<div>
		<div class="form-inline">
			<h3>Sign Up</h3>
			<div class="form-group">
				<input type="text" name="email" placeholder="type your email" v-model="email" class="form-control" />
				<input type="password" name="password" placeholder="password" v-model="password" class="form-control" />
				<!-- <input type="password" name="repassword" placeholder="retape password" v-model="repassword" class="form-control" /> -->
				<br />
				<button class="btn btn-primary" @click="signUp">Sign Up</button>
			</div>
			<br />
			<br />
			<p>{{error.message}}</p>
			<br />
		</div>
		<br />
		<br />
		<div>
			<router-link to="/signin">Sign In</router-link>
		</div>
	</div>
</template>

<script>
	import { firebaseApp } from '../firebaseApp'
	export default {
		data() {
			return {
				email: '',
				password: '',
				// repassword: '',
				error: {
					message: ''
				}
			}
		},
		methods: {
			signUp() {
				firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
				.catch(error => {
					this.error = error
				})
			}
		}
	}
</script>