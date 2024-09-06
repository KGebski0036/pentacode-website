import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-about-us-card',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './about-us-card.component.html',
	styleUrl: './about-us-card.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsCardComponent {
	roles = ["Programmer", "ProjectMenager", "Frontend", "Backend"];
	role = this.roles[Math.floor(Math.random() * 3)];
	name = "Klepacz Kodu";
	number = Math.floor(Math.random() * 100)
	photo = "https://randomuser.me/api/portraits/men/" + this.number + ".jpg";
	city = "Kielce";
	description = "Sub code website editor"

	skills = [
		{id: 1, name: "C++"},
		{id: 2, name: "Angular"},
		{id: 3, name: "C#"},
		{id: 4, name: "HTML/CSS"},
	];
}
