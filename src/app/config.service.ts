import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config:any
  configSub = new BehaviorSubject({})

  constructor(private http:HttpClient) {
      console.log("Üdv Config!")
      this.setLanguage('hu')
   }

   getConfig(){
      return this.configSub
   }

   setLanguage(lang:any){
    this.http.get('../assets/lang_'+lang+'.json').subscribe(
      (res)=>{
        this.config=res; 
        this.configSub.next(res)
        console.log(this.config)}
    )
   }
}
