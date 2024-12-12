import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  // ประกาศตัวแปรรับค่าจากฟอร์ม
  txtusername: any;
  txtpassword: any;

  constructor(
    public dataapi: DataapiService,
    public router: Router
  ) {}

  login() {
    // สร้าง object ของผู้ใช้
    let datalog = {
      username: this.txtusername,
      password: this.txtpassword
    };

    // เรียกใช้ฟังก์ชัน login ของ dataapiService
    this.dataapi.login(datalog).subscribe({
      next: (response: any) => {
        if (response.success) {
          alert(response.message);
          localStorage.setItem('token', response.token); // หาก API ส่ง token กลับมา
          this.router.navigateByUrl('/admin'); // เปลี่ยนเส้นทางไปยังหน้า admin
        } else {
          alert('เข้าสู่ระบบไม่สำเร็จ: ' + response.message);
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
      }
    });
  }

  // ฟังก์ชันไปหน้าสมัครสมาชิก
  gotoregister() {
    this.router.navigateByUrl('/register');
  }
}

