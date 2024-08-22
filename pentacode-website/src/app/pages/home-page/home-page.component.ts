import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";
import { TeamIntroductionComponent } from "../../components/team-introduction/team-introduction.component";
import { SkillsIntroductionComponent } from "../../components/skills-introduction/skills-introduction.component";

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [
    CommonModule,
    NavigationBarComponent,
    TeamIntroductionComponent,
    SkillsIntroductionComponent
],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
