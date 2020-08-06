import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../services/repository.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Repository } from '../beans/repository';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.css']
})
export class RepositoriesListComponent implements OnInit {

  pageNumber: number;
  repositoriesList: Repository[] = [];
  
  constructor(private repositoryService: RepositoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.pageNumber = +params.page;
      this.repositoriesList = this.repositoryService.getRepositoriesList(this.pageNumber);
    });
  }
  
  ChangePage(event: number) {
    this.router.navigate(['/pages', event ]);
  }

}
