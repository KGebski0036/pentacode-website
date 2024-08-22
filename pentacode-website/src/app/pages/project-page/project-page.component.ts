import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";

@Component({
	selector: 'app-project-page',
	standalone: true,
	imports: [
    CommonModule,
    NavigationBarComponent
],
	templateUrl: './project-page.component.html',
	styleUrl: './project-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent { }
