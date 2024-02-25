import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  async signIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('Login successful');
      // Navigate to the dashboard or home page after login
    } catch (error) {
      console.error('Login failed', error);
      // Handle errors (e.g., wrong password, user doesn't exist)
    }
  }
  async signUp(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('Registration successful');
      // Optional: Send verification email, navigate to the dashboard
    } catch (error) {
      console.error('Registration failed', error);
      // Handle errors (e.g., weak password, email already in use)
    }
  }
  async signOut() {
    console.log('sign out');

  }
  async changePassword() {
    console.log('change Password');

  }


}
