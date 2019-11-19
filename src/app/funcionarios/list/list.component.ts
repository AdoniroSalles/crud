import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  funcionarios: Observable<any>;

  constructor(
    private _funcionarioService: FuncionarioService,
    private _funcionarioDataService: DataService
  ) { }

  ngOnInit() {
    this.funcionarios = this._funcionarioService.getAll();
  }

  delete(key: string){
    this._funcionarioService.delete(key);
  }

  edit(funcionario: Funcionario, key: string){
    console.log(funcionario, key);
    this._funcionarioDataService.obtemFuncionario(funcionario, key);
  }
}
