<template>
	<div class="form-inline">
		<h3>Sign In</h3>
		<div class="form-group">
			<input type="text" placeholder="email" v-model="email" class="form-control" />
			<input type="password" placeholder="password" v-model="password" class="form-control" />
			<button class="btn btn-primary" @click="signIn">Sign In</button>
		</div>
		<br />
		<p>{{error.message}}</p>
		<br />
		<br />
		<div>
			<router-link to="/signup">Sign Up</router-link>
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
				error: {
					message: ''
				}
			}
		},
		methods: {
			signIn() {
				firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
				.catch(error => {
					this.error = error
				})
			}
		}
	}
</script>