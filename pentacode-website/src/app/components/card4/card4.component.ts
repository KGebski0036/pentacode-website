import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-card4',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './card4.component.html',
	styleUrl: './card4.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card4Component { }
