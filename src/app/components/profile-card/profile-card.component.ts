import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../interfaces/user.interface';
import { TitleComponent } from '../title/title.component';
import { NgOptimizedImage } from '@angular/common';
import { InfoItemComponent } from '../info-item/info-item.component';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [TitleComponent, TextComponent, InfoItemComponent, NgOptimizedImage],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  user: User | undefined;

  constructor(private githubUserProfileService: UserService) {}

  ngOnInit() {
    this.githubUserProfileService.getUser().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
