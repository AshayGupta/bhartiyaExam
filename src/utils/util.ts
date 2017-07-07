import {Injectable} from "@angular/core";
import { ToastController, LoadingController  } from 'ionic-angular';

@Injectable()
export class Util {

    loading: any;

    constructor( private toastCtrl: ToastController, private loadingCtrl: LoadingController ) {
    }

    public showToast( msg: string ) {
        let toast = this.toastCtrl.create( {
            message: msg,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }

    public showLongToast( msg: string ) {
        let toast = this.toastCtrl.create( {
            message: msg,
            duration: 4000,
            position: 'top'
        });
        toast.present();
    }

    public showLoading() {
        this.loading = this.loadingCtrl.create( {
            content: 'Please wait...'
        });
        this.loading.present();
    }

    public showLoadingWithMsg( msg: string ) {
        this.loading = this.loadingCtrl.create( {
            content: msg
        });
        this.loading.present();
    }

    public dismissLoading() {
        this.loading.dismiss();
    }

    public isBlank( str: string ) {
        if(str == "null"){

        return true;
        } else if ( str == null ) {
            return true;
        } else if ( str.trim().length == 0 ) {
            console.log( "Length " + str.trim().length );
            return true;
        }else{
            return false;
        }
    }

    public removeNull( str: string){
      if(str == "null"){
          return "";
      } else if ( str == null ) {
          return "";
      }
      else if ( str == undefined ) {
          return "";
      } else{
          return str;
      }
    }

    public pad(date:number):string{
        if(date<10){
            return '0'+date;
        }
        return ''+date;
    }

}
