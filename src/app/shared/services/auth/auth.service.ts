import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';

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
    try {
      await this.afAuth.signOut();
      console.log('Sign out successful');
      // Redirect to login page or show a message
    } catch (error) {
      console.error('Sign out failed', error);
    }
  }
  async changePassword() {
    console.log('change Password');

  }
  getUserId(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      map(user => user ? user.uid : null)
    );
  }

}
