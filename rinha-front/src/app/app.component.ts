import { Component } from '@angular/core';
import fs from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rinha-front';
  
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.processJSONFile(selectedFile);
    }
  }

  async processJSONFile(file:string){
    try {
      const rawData = fs.readFileSync(file, 'utf-8');
      const jsonData = JSON.parse(rawData);
      const totalItems = jsonData.length;
  
      for (let i = 0; i < totalItems; i += batchSize) {
        const batch = jsonData.slice(i, i + batchSize);
        //await processBatch(batch);
      }
  
      console.log('Processamento concluído.');
    } catch (error) {
      console.error('Erro durante o processamento:', error);
    }
  }


}
