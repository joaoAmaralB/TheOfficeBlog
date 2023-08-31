import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private id:string | null = ''
  @Input()
  photoCover: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentData: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) =>
      this.setValues(value.get('id'))
    );
  }

  setValues(id: string | null) {
    const result = fakeData.filter((data) => data.id == id)[0]
    this.photoCover = result.photoCover
    this.contentTitle = result.cardSubtitle
    this.contentData = result.cardContent
    
  }
}
