import { TokenType } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../core/services/storage/local-storage.service';


const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const EXPIRE_IN = 'expires_in';
const TOKEN_TYPE = 'token_type';

@Injectable({
  providedIn: 'root'
})
export class TokenSessionStorageService {

  constructor(private localStorageService: LocalStorageService) { }



  getToken() {
    return this.localStorageService.getJsonValue(ACCESS_TOKEN)
  }

  getRefreshToken() {
    return this.localStorageService.getJsonValue(REFRESH_TOKEN);
  }


  getExpireIn(){
    return this.localStorageService.getJsonValue(EXPIRE_IN)
  }



  saveExpireIn(expires_in){
    this.localStorageService.setJsonValue(EXPIRE_IN , expires_in)
  }

  getTokenType(){
      return this.localStorageService.getJsonValue(TOKEN_TYPE)
  }

  saveTokenType(token_type){
    this.localStorageService.setJsonValue(TOKEN_TYPE , token_type)
  }

  saveToken(token) {
    this.localStorageService.setJsonValue(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken) {
    this.localStorageService.setJsonValue(REFRESH_TOKEN, refreshToken);
  }

  removeToken() {
    this.localStorageService.clearToken(ACCESS_TOKEN);
  }

  removeRefreshToken() {
    this.localStorageService.clearToken(REFRESH_TOKEN);
  }


}
