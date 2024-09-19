import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page12Page } from './page12.page';

describe('Page12Page', () => {
  let component: Page12Page;
  let fixture: ComponentFixture<Page12Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Page12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
