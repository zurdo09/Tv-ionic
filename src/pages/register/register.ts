import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { UserService } from '../../services/user';
import { HomePage } from '../home/home';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  contrasena: string;
  correo: string;
  nombre: string;
  uid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private authService: AuthService, private userService: UserService,
              public toastCtrl: ToastController) {
  }

  register() {
    this.authService.registerEmail(this.correo, this.contrasena).then((data) => {
      const user: any = {
        contrasena: this.contrasena,
        correo: this.correo,
        nombre: this.nombre,
        uid: data.user.uid
      }
      this.userService.createUser(user).then((res) => {
        let toast = this.toastCtrl.create({
          message: 'Se registro correctamente',
          duration: 3000
        });
        toast.present();
        this.navCtrl.setRoot(HomePage);
      }).catch((error) => {
        let toast = this.toastCtrl.create({
          message: 'Error al registrarse',
          duration: 3000
        });
        toast.present();
      });
      console.log(data);
    }).catch((error) => {
      let mensaje;

      switch (error.code) {
        case "auth/email-already-in-use":
          mensaje = "El correo ya existe"
          break;
        case "auth/invalid-email":
          mensaje = "El correo es invalido"
          break;
        case "auth/operation-not-allowed":
          mensaje = "Operación no está permitida"
          break;
        case "auth/weak-password":
          mensaje = "La contraseña es incorrecta"
          break;
        default:
          mensaje = "Al parecer tu conexión no es adecuada"
          break;
      }
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 3000
      });
      toast.present();
    });
  }

  facebook() {
    this.authService.fbLogin().then((data) => {
      const user: any = {
        nombre : data.user.displayName,
        correo: data.user.email,
        uid: data.user.uid
      }
      if(data.additionalUserInfo.isNewUser) {
        this.userService.createUser(user).then((data) => {
          const toast = this.toastCtrl.create({
            message: 'Conectado a Facebook con exito',
            duration: 3000
          });
          toast.present();
          this.navCtrl.setRoot(HomePage);
        }).catch((error) => {
          const toast = this.toastCtrl.create({
            message: 'Error al ingresar con Facebook',
            duration: 3000
          });
          toast.present();
          console.log(error);
        });
      } else {
        const toast = this.toastCtrl.create({
          message: 'Facebook login exitoso',
          duration: 3000
        });
        toast.present();
        this.navCtrl.setRoot(HomePage);
      }
    }).catch((error) => {
      const toast = this.toastCtrl.create({
        message: 'Error al ingresar con Facebook',
        duration: 3000
      });
      toast.present();
      console.log(error);
    });
  }

  google() {
    this.authService.google().then((data) => {
      const user: any = {
        nombre : data.user.displayName,
        correo: data.user.email,
        uid: data.user.uid
      }
      if(data.additionalUserInfo.isNewUser) {
        this.userService.createUser(user).then((data) => {
          const toast = this.toastCtrl.create({
            message: 'Conectado a Google con exito',
            duration: 3000
          });
          toast.present();
          this.navCtrl.setRoot(HomePage);
        }).catch((error) => {
          const toast = this.toastCtrl.create({
            message: 'Error al ingresar con Google',
            duration: 3000
          });
          toast.present();
          console.log(error);
        });
      } else {
        const toast = this.toastCtrl.create({
          message: 'Google login exitoso',
          duration: 3000
        });
        toast.present();
        this.navCtrl.setRoot(HomePage);
      }
    }).catch((error) => {
      const toast = this.toastCtrl.create({
        message: 'Error al ingresar con Google',
        duration: 3000
      });
      toast.present();
      console.log(error);
    });
  }  

  back() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
