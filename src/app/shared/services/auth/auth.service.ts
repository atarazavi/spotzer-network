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
    } catch (error) {
      console.error('Login failed', error);
    }
  }
  async signUp(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed', error);
    }
  }
  async signOut() {
    console.log('sign out');

  }
  async changePassword() {
    console.log('change Password');

  }


}
