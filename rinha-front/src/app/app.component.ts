import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rinha-front';  
  fileContent: any;
  batchSize = 1000;
  currentIndex = 0;

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      try {
        this.fileContent = JSON.parse(e.target.result);
        console.log('Conteúdo do arquivo JSON:', this.fileContent);
      } catch (error) {
        console.error('Erro ao analisar o arquivo JSON:', error);
      }
    };
    reader.readAsText(file);
  }

  processDataInBatches() {
    if (!this.fileContent || this.currentIndex >= this.fileContent.length) {
      console.log('Processamento concluído.');
      return;
    }

    const end = Math.min(this.currentIndex + this.batchSize, this.fileContent.length);
    const batch = this.fileContent.slice(this.currentIndex, end);
    
    // Aqui você pode processar o lote atual (batch)
    this.processBatch(batch);

    this.currentIndex = end;

    // Para evitar que o aplicativo trave devido a um grande processamento, você pode usar setTimeout
    // para dar uma pausa entre as partes do processamento
    setTimeout(() => {
      this.processDataInBatches();
    }, 0);
  }

  processBatch(batch: any[]) {
  }

}
