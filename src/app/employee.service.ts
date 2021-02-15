import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IEmployee } from "./employee";

export class EmployeeServise {

    private _db:string = "/assets/data/employee s.json";
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
    }
    getEmployees() :Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._db); 
      
  
    }
  
  }