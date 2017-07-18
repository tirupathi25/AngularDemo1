import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturedAppsComponent } from './futured-apps.component';

describe('FuturedAppsComponent', () => {
  let component: FuturedAppsComponent;
  let fixture: ComponentFixture<FuturedAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturedAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturedAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
