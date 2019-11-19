import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Funcionario } from './funcionario';
import { tap, map }        from "rxjs/operators";
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private _angularFireDatabse: AngularFireDatabase
  ) { }

  insert(funcionario: Funcionario){
    this._angularFireDatabse.list("funcionario").push(funcionario)
        .then((result: any) => {
          console.log(result.key);
        })
  }

  update(funcionario: Funcionario, key: string){

    this._angularFireDatabse.list("funcionario").update(key, funcionario);
  }

  getAll(){
    return this._angularFireDatabse.list("funcionario")
               .snapshotChanges()
               .pipe(
                map(changes => {
                   return changes.map(data =>({ key: data.payload.key, ...data.payload.val()}));
                 })
               )
  }

  delete(key: string){
    this._angularFireDatabse.object(`funcionario/${key}`).remove();
  }
}
