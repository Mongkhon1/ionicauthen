import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service'; // Import DataapiService
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // กำหนดตัวแปรสำหรับเก็บค่าข้อมูล
  txtname: any;
  txtemail: any;
  txtusername: any;
  txtpassword: any;

  constructor(
    // เรียกใช้ Library โดยเก็บค่าไว้ในตัวแปร
    public dataapi: DataapiService,
    public route: Router
  ) {}

  ngOnInit() {}

  // ฟังก์ชันสำหรับบันทึกข้อมูล
  register() {
    let data = {
      name: this.txtname,
      email: this.txtemail,
      username: this.txtusername,
      password: this.txtpassword,
    };

    this.dataapi.registerUser(data).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.route.navigateByUrl('/home'); // ไปยังหน้า Home
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // ฟังก์ชันไปหน้า Login
  gotoHome() {
    this.route.navigate(['/home']);
  }
}
