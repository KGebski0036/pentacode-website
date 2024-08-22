import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-team-introduction',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './team-introduction.component.html',
	styleUrl: './team-introduction.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamIntroductionComponent { }
