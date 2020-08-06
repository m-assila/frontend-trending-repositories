import { Injectable } from '@angular/core';
import { Repository } from '../beans/repository';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repositoriesList: Repository[] = [];
  constructor(private httpClient: HttpClient) { }

  getRepositoriesInfo(page: number): Observable<any> {
    const getRequest = `https://api.github.com/search/repositories?q=created:>${this.getPresentDate()}
       &sort=stars&order=desc&page=${page}`;
    return this.httpClient.get<any>(getRequest);
  }
  getRepositoriesList(page: number): Repository[] {
      this.getRepositoriesInfo(page).subscribe((resp: any) => {
        this.repositoriesList.length = 0;
        for (const elem of resp.items) {
        this.repositoriesList.push(new Repository( elem.name, elem.description,
          elem.owner.login, elem.owner.avatar_url,
          elem.stargazers_count, elem.open_issues_count ));
      }
        return this.repositoriesList;
    });
      return this.repositoriesList;
  }

  getPresentDate(): string {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day =  String(date.getDate()).padStart(2, '0');
    return date.getFullYear() + '-' + month + '-' + day;
  }
}
