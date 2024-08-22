import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-card3',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './card3.component.html',
	styleUrl: './card3.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card3Component { }
