import { Component, OnInit } from '@angular/core';
import packageJson from '../../../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();
  public appJson: any = packageJson;


  constructor() {}

  ngOnInit(): void {}
}
