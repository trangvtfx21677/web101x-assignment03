"use strict";

////////////////////// ẩn thông tin cá nhân //////////////////////
const info = document.querySelector(".personal-info-details");
const form = document.querySelector(".email-form");
const emailInput = document.getElementById("email");
const btnSubmit = document.querySelector(".btn-submit");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault(); //ngăn cản trình duyệt chuyển tiếp người dùng tới trang đích của link liên kết. Khi không muốn gửi biểu mẫu khi nhấp vào nút gửi. Thay vào đó, muốn xác thực biểu mẫu trước khi gửi

  const text = emailInput.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (text === "") {
    alert("Vui lòng nhập email!");
  } else if (text.match(regex)) {
    console.log(text);
    info.style.display = "block"; // hiện thông tin
    form.style.display = "none"; // ẩn form nhập email
    return true;
  } else {
    alert("Email không hợp lệ!");
    return false;
  }
});

////////////////////// ẩn thông tin nghề nghiệp //////////////////////

const mouseOverEl = document.getElementsByClassName("mouseover");
const btn = document.querySelectorAll(".btn-job");

// xuất ra giá trị của 2 mảng
// console.log(mouseOverEl, btn);

for (let i = 0; i < mouseOverEl.length; i++) {
  // khi di chuyển chuột ra vào thì nút View more tương ứng ẩn / hiện
  mouseOverEl[i].addEventListener("mouseover", function () {
    btn[i].classList.remove("hidden");
  });

  mouseOverEl[i].addEventListener("mouseout", function () {
    btn[i].classList.add("hidden");
  });

  // nếu click vào nút View more thì thông tin hiện ra, đồng thời chữ biến thành Viewless

  const viewEl = mouseOverEl[i].children;

  viewEl[2].addEventListener("click", function () {
    if (viewEl[3].classList.contains("hidden")) {
      viewEl[3].classList.remove("hidden");
      viewEl[2].textContent = "▼ View less";
    } else {
      viewEl[3].classList.add("hidden");
      viewEl[2].textContent = "▼ View more";
    }
  });

  ////////////////////// HIỆU ỨNG DI CHUỘT VÀO 3 PROJECTS //////////////////////
  ////// khi chuột di chuyển vào từng dự án thì hiện lên nút view more

  const pjInfo = document.querySelectorAll(".project-info");
  const pjName = document.getElementsByClassName("name-detail");
  const btnPj = document.querySelectorAll(".btn-pj");

  for (let i = 0; i < pjInfo.length; i++) {
    pjInfo[i].addEventListener("mouseover", function () {
      pjName[i].style.color = "#3573e6";
      btnPj[i].classList.remove("hidden");
    });

    pjInfo[i].addEventListener("mouseout", function () {
      pjName[i].style.color = "#000";
      btnPj[i].classList.add("hidden");
    });
  }

  ////// khi nhấn vào nút view more nó sẽ điều hướng sang trang khác
}
