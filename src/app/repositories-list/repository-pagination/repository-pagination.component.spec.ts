import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryPaginationComponent } from './repository-pagination.component';

describe('RepositoryPaginationComponent', () => {
  let component: RepositoryPaginationComponent;
  let fixture: ComponentFixture<RepositoryPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
