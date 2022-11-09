import { Component, OnInit } from '@angular/core';
import { VotingResult } from './voting-result';
import { TEAMS } from '../voting/team-data';

@Component({
  selector: 'app-voting-results',
  templateUrl: './voting-results.component.html',
  styleUrls: ['./voting-results.component.scss']
})
export class VotingResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  results = TEAMS

  totalVotes() {
    let totalVote: number = 0;
    TEAMS.forEach(element => {
      totalVote += element.score
    });
    return totalVote;
  }

  calcPercent(score: number) {
    return (score * 100 / this.totalVotes()).toFixed(0);
  }
  
}
