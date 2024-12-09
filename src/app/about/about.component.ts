import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <h3>Page was made by:</h3>
    <p>{{ name }}</p>
    <p>{{ age }} y.o.</p>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  name: string | null = '';
  age: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.age = params['age'];
    });
  }
}