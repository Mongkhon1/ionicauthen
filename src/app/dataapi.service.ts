import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http:HttpClient
  ){}

  //ฟังก์ชันเชื่อมต่อ api ระบบสมัครสมาชิก
  registerUser(data: any) {
    return this.http.post('http://localhost/API/API/regiter.php' , data);
  }
  
  //ฟังก์ชันเชื่อมต่อ API เข้าสู่ระบบ
  login(datalog:any){
    return this.http.post('http://localhost/API/API/login.php', datalog);
  }

  //ฟังก์ชันเชื่อมต่อ api ออกจากระบบ
  logout() {
    return this.http.post('http://localhost/API/API/logout.php', {}); //ตรวจสอบว่า URL ถูกต้อง
  }

}
