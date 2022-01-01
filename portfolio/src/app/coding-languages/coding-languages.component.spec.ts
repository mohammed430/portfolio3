import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingLanguagesComponent } from './coding-languages.component';

describe('CodingLanguagesComponent', () => {
  let component: CodingLanguagesComponent;
  let fixture: ComponentFixture<CodingLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
