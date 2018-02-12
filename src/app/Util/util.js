import {ApiUrlConstant} from "./apiUrl.constant";
import moment from 'moment';
import FileSaver from "file-saver";

export class Util {
    headerContext = null;
    toastContext = null;
    sideMenuContext = null;
    sideMenuWidth = "14rem";

    static setSidemenuContext(context) {
        this.sideMenuContext = context;
    }

    static getSidemenuContext() {
        return this.sideMenuContext;
    }

    static getSidemenuWidth() {
        return this.sideMenuWidth || "3.3rem";
    }

    static toggleSidemenu() {
        if (this.sideMenuContext) {
            if (this.sideMenuContext.state.width === "14rem") {
                this.sideMenuWidth = "3.3rem";
            } else {
                this.sideMenuWidth = "14rem";
            }
            this.sideMenuContext.setState({width: this.sideMenuWidth});
        }
    }

    static setHeaderContext(context) {
        this.headerContext = context;
    }

    static getHeaderContext(context) {
        return this.headerContext;
    }

    static toggleHeaderLoader(value) {
        if (this.headerContext) {
            this.headerContext.setState({showLoader: value});
        }
    }

    static setToastContext(context) {
        // if (!this.toastContext) {
            this.toastContext = context;
        // }
    }

    static getToastContext(context) {
        return this.toastContext;
    }

    static validateImageFiles(files) {
        let isValid = true;
        if (files && files.length > 0) {
            	files.forEach((file) => {
                    if (file && (file.type != "image/png" && file.type != "image/jpg" && file.type != "image/jpeg")) {
                        isValid = false;
                    }
                }, this);
        } else {
            isValid = false
        }

        return isValid;
    }

    static beautifyUrl(urlString, params) {
        for (let value of params) {
            urlString = urlString.replace('{?}', value);
        }

        return urlString;
    }

    static getFullImageUrl(imageId, isThumb = true) {
        let imageUrl = ApiUrlConstant.BASE_URL+"image/";
        if (isThumb) {
            imageUrl = imageUrl+"thumb/";
        }

        return imageUrl+imageId
    }

    static base64ImageFromFile(imageFile, withType = false) {
        let imageConversinoPromise;
        if (FileReader && imageFile) {
            var fr = new FileReader();
            imageConversinoPromise = new Promise((resolve, reject) => {
                fr.onload = () => {
                    if (withType) {
                        resolve(fr.result);
                    } else {
                        resolve(fr.result.split(",")[1]);
                    }
                }
                fr.readAsDataURL(imageFile);
            });
        }

        return imageConversinoPromise;
    }

    static getLoggedInUserDetails() {
        return JSON.parse(localStorage.getItem("__LOGGEDIN_USER_DETAILS"));
    }

    static setLoggedInUserDetails(userDetails) {
        return localStorage.setItem("__LOGGEDIN_USER_DETAILS", JSON.stringify(userDetails));
    }

    static getActiveRole() {
        const me = this.getLoggedInUserDetails();
        return me.activeRole;
    }

    static setActiveRole(role) {
        return localStorage.setItem("__LOGGEDIN_USER_ACTIVE_ROLE", JSON.stringify(role));
    }

    static getPrivilages() {
        return JSON.parse(localStorage.getItem("__LOGGEDIN_USER_PRIVILAGES"));
    }

    static setPrivilages(privilages) {
        return localStorage.setItem("__LOGGEDIN_USER_PRIVILAGES", JSON.stringify(privilages));
    }

    static clearLoggedInUserData() {
        localStorage.setItem("__LOGGEDIN_USER_DETAILS", null);
        localStorage.setItem("accessToken", null);
        localStorage.setItem("last_login", null);
    }

    static getMyClubDetails() {
        const me = this.getLoggedInUserDetails();
        return me.myClub;
    }

    static getAuthToken() {
        return localStorage.getItem("accessToken");
    }

    static displayImageFromFile(imageFile, imagePlaceholderId) {
        if (FileReader && imageFile) {
            var fr = new FileReader();
            fr.onload = () => {
                if(document.getElementById(imagePlaceholderId)) {
                    document.getElementById(imagePlaceholderId).src = fr.result;
                }
            }
            fr.readAsDataURL(imageFile);
        }
    }

    static getDateInFormat(timestamp, formatString) {
        return moment.unix(timestamp/1000).format(formatString);
    }

    static getDateStringFromTimestamp(timestamp) {
        // 2017-11-08T22:02
        return moment.unix(timestamp/1000).format("YYYY-MM-DDTHH:mm");
    }

    static getIndexOfItem(list, key, value) {
        let selectedIndex = -1;
        list.forEach(function(element, index) {
            if (element[key] === value) {
                selectedIndex = index;
            }
        }, this);
        return selectedIndex;
    }

    static logOut(){
        if(confirm("Are you sure about logging out?")){
            localStorage.clear();
            window.location.href = "/login";
        }
    }

    static hasPrivilage(privilage) {
        let hasPrivilage = true;
        if (privilage) {
            if (Util.getLoggedInUserDetails()) {
                const userPrivilages = Util.getLoggedInUserDetails().currentPrivileges;
                hasPrivilage = userPrivilages.indexOf(privilage) < 0 ? false : true;
            }
        } 
        return hasPrivilage;
    }

    static downloadFile(base64, filename, format) {
        // var element = document.createElement('a');
        // element.setAttribute('href', 'data:application/octet-stream;base64,' + base64);
        // element.setAttribute('download', 'report.pdf');
      
        // element.style.display = 'none';
        // document.body.appendChild(element);
      
        // element.click();
      
        // document.body.removeChild(element);
        fetch("data:application/" + format + ";base64," + base64)
        .then(function(resp) {return resp.blob()})
        .then(function(blob) {
          FileSaver.saveAs(blob, filename + "." + format);
        });
    }
}