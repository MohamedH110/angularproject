import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Personne } from './personne';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient,private router: Router) { }

  public getPersonne(): Observable<Personne[]> {
    const url = 'http://localhost:3000/personnes';
    return this.http.get<Personne[]>(url);
  }

  addPersonne(npersonne: Personne): Observable<Personne[]> {
    const url = 'http://localhost:3000/personnes';
    console.log('Adding employee...');
    
    return this.http.post<Personne[]>(url, npersonne).pipe(
      tap(() => {
          this.router.navigate(['']);
         
        })
      
    );
  }

  deletePersonne(id: number): Observable<Personne[]> {
    const url = `http://localhost:3000/personnes/${id}`;
    window.location.reload();
    return this.http.delete<Personne[]>(url);
  }
   
   public updatePersonne(updatedPersonne: Personne): Observable<Personne> {
    const url = `http://localhost:3000/personnes/${updatedPersonne.id}`;
    
    return this.http.put<Personne>(url, updatedPersonne).pipe(
      tap(() => {
          this.router.navigate(['']);
          
        }));
  }
  public getPersonneById(id: number): Observable<Personne> {
    const url = `http://localhost:3000/personnes/${id}`;
    return this.http.get<Personne>(url);
  }



}

