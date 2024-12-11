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
      skills: ["C#", "C++", "Linux", "Cybersecurity"],
      aboutUrl: "#",
      photoUrl: "team/karol.jpg",
      description: "Co-founder, Leader of back-end developement. Experienced in Linux Administration and Cybersecurity"
    },
    {
      firstName: "Jacek",
      lastName:  "Jarosz",
      skills: ["Angular", "C#", "HTML/CSS", "Linux"],
      aboutUrl: "#",
      photoUrl: "team/jaca.jpg",
      description: "Co-founder, Leader of front-end Developement"
    },
    {
      firstName: "Marcin",
      lastName:  "Furmańczyk",
      skills: ["C#", "Project Management"],
      aboutUrl: "#",
      photoUrl: "team/marcin.jpg",
      description: "Co-founder, Project manager and .NET developer."
    },     {
      firstName: "Oskar",
      lastName:  "Malarecki",
      skills: ["Angular", "HTML/CSS"],
      aboutUrl: "#",
      photoUrl: "team/oskar.jpg",
      description: "Front-end Developer"
    },   
    {
      firstName: "Mateusz",
      lastName:  "Szymkiewicz",
      skills: ["C#"],
      aboutUrl: "#",
      photoUrl: "team/empty.svg",
      description: "Back-end Developer"
    }
  ];


}
