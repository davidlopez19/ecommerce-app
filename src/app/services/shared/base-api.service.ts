import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroments/enviroment';
import { LocalStorageService } from './localStorage.service';


@Injectable({
  providedIn: 'root'
})

export class BaseService<TmodelResponse> {

  public headers: HttpHeaders;
  // public API_ROOT = environment.API_URL;
  public API_ROOT = "https://eccomerce-api.azurewebsites.net/";

  constructor(
    protected _httpClient: HttpClient,
    private _localStorageService: LocalStorageService
  ) {
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
  };


  public addAutorization() {
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getTokenFromCookie()}`
    });
  }


  public getRequest(endPoint: string, queryString: string, authorization?: boolean, baseUrl: string = ""): Observable<any> {

    if (authorization) {
      this.addAutorization();
    }

    return this._httpClient.get<any>(`${this.getUrl(baseUrl)}${endPoint}${queryString}`, { headers: this.headers }).pipe();
  }


  public get<Tmodel>(endPoint: string, queryString: string, authorization?: boolean): Observable<TmodelResponse> {

    if (authorization) {
      this.addAutorization();
    }
    return this._httpClient.get<TmodelResponse>(`${this.API_ROOT}${endPoint}${queryString}`, { headers: this.headers }).pipe();
  }


  public post<Tmodel>(endPoint: string, object: any, addAutorization?: boolean): Observable<TmodelResponse> {
    if (addAutorization) {
      this.addAutorization();
    }
    return this._httpClient.post<TmodelResponse>(`${this.API_ROOT}${endPoint}`, object, { headers: this.headers }).pipe();
  }

  public getDownloadFile(endPoint: string, object: any, mimeTypeFile: string) {
    this._httpClient.post(`${this.API_ROOT}${endPoint}`, object, { responseType: 'arraybuffer' })
      .subscribe(
        response => this.postDownloadFile(response, mimeTypeFile)
      );
  }

  public postDownloadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }


  /**
  *Metodo para obtener la url a donde se va a consumir el api
  *
  * @private
  * @param {string} baseulr url, en caso de que esta sea null se pondra por defecto la de concreto webapi
  * @return {*}  {string} retornar la url para consumir el api
  * @memberof DataService
  */
  private getUrl(baseulr: string): string {
    if (!baseulr)
      return this.API_ROOT;
    return baseulr;
  }

  private getTokenFromCookie() {
    return this._localStorageService.get("token");
   // return this.getCookie('InternalToken');

  }

  private getCookie(name: string): string {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;
    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
}