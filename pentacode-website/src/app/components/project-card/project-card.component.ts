import { Component, Input } from '@angular/core';

interface ProjectImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input()
  img!: ProjectImage;

  @Input()
  title!: string;

  @Input()
  projectLink!: string;
}
