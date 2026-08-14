/* =========================================
   نظام إدارة العيادة الطبية
   ملف تشغيل النظام
   ========================================= */


/* بيانات الدخول التجريبية */
const USERNAME = "admin";
const PASSWORD = "1234";


/* =========================================
   تسجيل الدخول
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const username =
                document.getElementById("username").value.trim();

            const password =
                document.getElementById("password").value;

            const message =
                document.getElementById("loginMessage");


            if (username === USERNAME && password === PASSWORD) {

                message.textContent =
                    "✅ تم تسجيل الدخول بنجاح";

                message.className =
                    "login-message success-message";


                /*
                   حفظ حالة تسجيل الدخول
                   حتى يعرف النظام أن المستخدم دخل بالفعل
                */

                localStorage.setItem(
                    "clinicLoggedIn",
                    "true"
                );


                /*
                   الانتقال إلى لوحة التحكم
                */

                setTimeout(function () {

                    window.location.href =
                        "dashboard2.html";

                }, 500);


            } else {

                message.textContent =
                    "❌ اسم المستخدم أو كلمة المرور غير صحيحة";

                message.className =
                    "login-message error-message";

            }

        });

    }

});