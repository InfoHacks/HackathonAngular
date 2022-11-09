import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './team-data';
@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  teams = TEAMS;

  selectTeam(team: Team) {

    this.teams.forEach(x => x.isSelected = false);

    const x = this.teams.find(x => x.name === team.name);

    if(x != null) { 
      x.isSelected = true;
    }
    
    console.log(team.name);
  }

  onMouseOver(voteBtn: HTMLElement) {
    const selectedTeam = this.teams.find(x => x.isSelected);

    if(!selectedTeam?.isSpecial) {
      
      const maxWidth = voteBtn.parentElement?.offsetWidth ?? 0 - parseInt(voteBtn.style.width);

      let randomX = Math.floor(Math.random() * (maxWidth - 50))

      voteBtn.style.left = `${randomX}px`
    } else {
      // TODO handle click event on our team
    }
    
  }
    
  
}
