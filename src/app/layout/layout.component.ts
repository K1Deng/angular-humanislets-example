import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzPaginationModule,
    NzPageHeaderModule,
    NzFormModule,
    FormsModule,
    NzSelectModule,
    NzCheckboxModule,
    NzGridModule,
    NzRadioModule,
    NzInputModule,
    NzButtonModule,
    NzTabsModule,
    NzUploadModule,
    NzSliderModule,
    NzCollapseModule,
    NzFloatButtonModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent {
  selectedType: string | null = null;
  selectedPrimaryType: string | null = null;
  selectedDetailType: string | null = null;
  selectedOmicsType: string | null = null;
  selectedGroupA: string | null = null;
  selectedGroupB: string | null = null;
  selectedMetadataCategory: string | null = null;
  selectedMetadataVariable: string | null = null;
  groupA: string | null = null;
  groupB: string | null = null;
  
  readonly covariates = [
    'Age', 
    'Sex', 
    'BMI', 
    'Donation Type',
    'HbA1c (%)',
    'HLA A2',
    'Diabetes Diagnosis',
    'Corrected Diabetes Status',
  ];
  
  readonly organCharacteristics = [
    'Cold Ischemic Time (h)',
    'Pancreas Weight (g)',
    'Fatty Infiltration',
    'Organ Consistency',
    'Collegenanse Supplier',
    'Cpllegenanse Type',
    'Digestion Time (min)'
  ];
  
  listOfDonorOption = this.covariates;
  listOfOrganOption = this.organCharacteristics;
  listOfTagOptions: string[] = [];
  donorSelection: 'all' | 'subset' = 'all';
  
  selectedSexOptions: string[] = ['male', 'female'];
  selectedDiabetesOptions: string[] = ['no_diabetes', 'type1', 'type2'];
  selectedAvailabilityType: string[] = [];
  ageRange: [number, number] = [20, 80];
  bmiRange: [number, number] = [20, 45];
  hba1cRange: [number, number] = [10, 12];
  
  setDonorSelection(value: 'all' | 'subset'): void {
    this.donorSelection = value;
  }

  onDonorSelectionChange(): void {
    if (this.donorSelection === 'all') {
      this.selectedMetadataVariable = null;
      this.selectedMetadataCategory = null;
      this.selectedSexOptions = [];
      this.selectedDiabetesOptions = [];
      this.ageRange = [20, 80];
      this.bmiRange = [20, 45];
      this.hba1cRange = [10, 12];
    }
  }

  beforeUpload = (file: NzUploadFile, fileList: NzUploadFile[]): boolean => {
    console.log('File selected:', file);
    return false;
  };

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log('File selected:', file);
  }

  get isCategorical(): boolean {
    return this.selectedMetadataVariable === 'diabetes';
  }

  get covariatesDisabled(): boolean {
    return this.selectedType === 'single-cell';
  }

  pValueCutoff: number = 0.05;
  isChecked = true;

  onCookiesClick(): void {
    console.log('Cookies button clicked');
  }
}