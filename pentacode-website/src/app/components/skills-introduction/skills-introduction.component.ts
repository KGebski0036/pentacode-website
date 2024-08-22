import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-skills-introduction',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './skills-introduction.component.html',
	styleUrl: './skills-introduction.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsIntroductionComponent { }
