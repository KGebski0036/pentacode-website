import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";
import { Card1Component } from "../../components/card1/card1.component";
import { Card2Component } from "../../components/card2/card2.component";
import { Card3Component } from "../../components/card3/card3.component";
import { Card4Component } from "../../components/card4/card4.component";

@Component({
	selector: 'app-about-us-page',
	standalone: true,
	imports: [
    CommonModule,
    NavigationBarComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component
],
	templateUrl: './about-us-page.component.html',
	styleUrl: './about-us-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent { }
