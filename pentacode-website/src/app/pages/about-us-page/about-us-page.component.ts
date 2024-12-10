import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";
import { AboutUsCardComponent } from "../../components/about-us-card/about-us-card.component";
import { BanerComponent } from "../../components/baner/baner.component";
import { TeamMember } from '../../view/TeamMember';

@Component({
	selector: 'app-about-us-page',
	standalone: true,
	imports: [
    CommonModule,
    NavigationBarComponent,
    AboutUsCardComponent,
    BanerComponent
],
	templateUrl: './about-us-page.component.html',
	styleUrl: './about-us-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent {
  teamMembers: TeamMember[] = [
    {
      firstName: "Karol",
      lastName:  "Gębski",
      skills: ["C#", "C++"],
      aboutUrl: "#",
      photoUrl: "team/karol.jpg",
      description: "nwm jest zbombiony"
    },
    {
      firstName: "Marcin",
      lastName:  "Furmańczyk",
      skills: ["C#", "C++", "Project Management", "Crisis Management", "HR", "Scrum Master"],
      aboutUrl: "#",
      photoUrl: "team/marcin.jpg",
      description: "Zjada kolegów :("
    },
    {
      firstName: "Oskar",
      lastName:  "Malarecki",
      skills: ["Angular", "C#", "React", "HTML/CSS"],
      aboutUrl: "#",
      photoUrl: "team/oskar.jpg",
      description: "Lubi musztardę i Angular."
    }, {
      firstName: "Jacek",
      lastName:  "Jarosz",
      skills: ["Angular", "C#", "HTML/CSS", "Linux"],
      aboutUrl: "#",
      photoUrl: "team/jaca.jpg",
      description: ""
    },
  ];


}
