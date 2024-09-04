import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";
import { Card1Component } from "../../components/card1/card1.component";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
	selector: 'app-project-page',
	standalone: true,
	imports: [
    CommonModule,
    NavigationBarComponent,
    Card1Component,
    ProjectCardComponent,
    FooterComponent
],
	templateUrl: './project-page.component.html',
	styleUrl: './project-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent { }
