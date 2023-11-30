import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  messages:any
  nyelv=false

  constructor(private config:ConfigService){
    this.config.getConfig().subscribe(
      (res:any)=>this.messages=res.nav
    )
  }
  nyelvValtas(event:any){
    // console.log(event.target.checked)
    if (event.target.checked) this.config.setLanguage('hu')
    else this.config.setLanguage('en')
  }

}
