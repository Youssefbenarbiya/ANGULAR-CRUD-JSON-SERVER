import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoueurComponent } from './add-joueur.component';

describe('AddJoueurComponent', () => {
  let component: AddJoueurComponent;
  let fixture: ComponentFixture<AddJoueurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJoueurComponent]
    });
    fixture = TestBed.createComponent(AddJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
