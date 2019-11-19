import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private funcionarioSource = new BehaviorSubject({ 
    funcionario: null,
    key: '',
  })

  //assincrono, fica observando ate ter um usuario 
  funcionarioAtual = this.funcionarioSource.asObservable();

  obtemFuncionario(funcionario: Funcionario, key: string){
    this.funcionarioSource.next({
      funcionario: funcionario,
      key: key
    })
  }
}
