import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TeamMember } from '../../view/TeamMember';

@Component({
	selector: 'app-about-us-card',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './about-us-card.component.html',
	styleUrl: './about-us-card.component.css'
})
export class AboutUsCardComponent {
  @Input()
  memberInfo!: TeamMember;
}
