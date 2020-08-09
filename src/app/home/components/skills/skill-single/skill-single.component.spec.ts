import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSingleComponent } from './skill-single.component';

describe('SkillSingleComponent', () => {
  let component: SkillSingleComponent;
  let fixture: ComponentFixture<SkillSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
