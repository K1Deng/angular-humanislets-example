import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzDropDownModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    const trimmed = this.searchTerm.trim();
    if (trimmed) {
      this.router.navigate(['/detail', trimmed]);
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
  }
}
