import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponetComponent } from './post-componet.component';

describe('PostComponetComponent', () => {
  let component: PostComponetComponent;
  let fixture: ComponentFixture<PostComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
