import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      )
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => console.log(`added user id=${newUser.id}`)),
      catchError(this.handleError<User>('addHero'))
    )
  }

  login(user: User): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}/?name=${user.name}`).pipe(
      catchError(this.handleError<User[]>(`getUser id=${user.id}`))
    )
  }

  restore(name: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}?name=${name}`).pipe(
      catchError(this.handleError<User[]>(`restore password`))
    )
  }

  isRepeat(users: User[], name: string): boolean {
    return !users.find(user => user.name === name)
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions).pipe(
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  editUser(user: User): Observable<any> {
    return  this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      console.log(`${operation} failed: ${error.message}`)

      return of(result as T);
    }
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
}
