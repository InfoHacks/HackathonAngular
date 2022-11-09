import { Component, OnInit } from '@angular/core';
import { Team } from './team';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  teams: Team[] = [
    { name: 'Phong on a Shelf', isSpecial: false, isSelected: false},
    { name: 'Will you(r) work?', isSpecial: false, isSelected: false},
    { name: 'TEAM 3 THREE', isSpecial: false,isSelected: false},
    { name: 'Automator', isSpecial: false,isSelected: false},
    { name: 'TEAM 5', isSpecial: false,isSelected: false},
    { name: 'TEAM 6', isSpecial: false,isSelected: false},
    { name: 'We didn\'t break it; we merely observed it (dirty dogs)', isSpecial: false,isSelected: false},
    { name: 'Here for the Fun', isSpecial: false,isSelected: false},
    { name: 'JJAM on Toast', isSpecial: false,isSelected: false},
    { name: 'FILL IT', isSpecial: false,isSelected: false},
    { name: 'WFH', isSpecial: false,isSelected: false},
    { name: 'TEAM 12', isSpecial: false,isSelected: false},
    { name: 'TEAM 13', isSpecial: false,isSelected: false},
    { name: 'InfoHacks', isSpecial: false,isSelected: true},
  ]


  selectTeam(team: Team) {

    this.teams.forEach(x => x.isSelected = false);

    const x = this.teams.find(x => x.name === team.name);

    if(x != null) { 
      x.isSelected = true;
    }
    
    console.log(team.name);
  }

  onMouseOver(voteBtn: HTMLElement) {
    console.log('mouseover')
    const randomX = Math.floor(Math.random() * (innerWidth - 200))
    const randomY = Math.floor(Math.random() * (innerHeight - 200))
    voteBtn.style.top = `${randomY}px`
    voteBtn.style.left = `${randomX}px`
  }
    
  
}
