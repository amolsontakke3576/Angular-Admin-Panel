import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();
  public name: string = environment.productName;
  public publicURL: string = environment.publicPageURL;

  constructor() {}

  ngOnInit(): void {}
}
